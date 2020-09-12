var express = require('express');
var router = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//MongoDB/node.js driver set up and get the uri from cluster
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://aman0501:amanrizvi1@cluster0.fuhiw.mongodb.net/<dbname>?retryWrites=true&w=majority'
const client = new MongoClient(uri);
var mongoObj = require('mongodb').ObjectID;
//newListing is the document to insert 
async function createListing(client, newListing) { 
  await client.db('HackerNews').collection("Posts").insertOne(newListing); 
};
//retrives all saved 
async function retrieveAllSaved(client) { 
  const result = await client.db('HackerNews').collection("Posts").find({}).toArray();
  return result;
};
//will delete the saved
async function deleteSaved(client, id) { 
  var mongodb = require('mongodb');
  await client.db('HackerNews').collection("Posts").deleteOne({_id:new mongodb.ObjectID(id)});
};
async function updatedPosting(client, id) { 
  var mongodb = require('mongodb');
  var query = {'_id': mongodb.ObjectID(id)};
  var sort = [];
  var operator = {'$inc' : {'upvotes' : 1}};
  var options = {'new' : true};
  await client.db('HackerNews').collection("Posts").findOne(query, sort, operator, options, (err, doc) => {
      if (err) { 
        console.log(err); 
      };
      console.log(doc);
  })
};
async function updatedComments(client, id, comment) { 
  //comment is going to be an array
  var mongodb = require('mongodb');
  var query = {'_id': mongodb.ObjectID(id)};
  var sort = [];
  var operator = {'$push' : {'comment' : comment }};
  var options = {'new' : true};
  await client.db('HackerNews').collection("Posts").findAndModify(query, sort, operator, options, (err, doc) => {
      if (err) { 
        console.log(err); 
      };
      console.log(doc);
  })
};
async function findPost(client, id) { 
  var mongodb = require('mongodb');  
  var query = {'_id': mongodb.ObjectID(id)};
    await client.db('HackerNews').collection("Posts").findOne(query, (err, doc) => {
      if (err) { 
        console.log(err); 
      };
      console.log(doc);
    });
}
app.post('/getPost', (req,res) => { 
    var id = req.body.id;
    async function main() { 
      try { 
        if (client.isConnected()) { 
          await findPost(client,id);
        }
        else { 
          await client.connect().catch(error => console.error());
          await findPost(client,id);
        }
      }
      catch(e) { 
        console.error(e);
      }
    }
    main().catch(console.error);
});
app.post('/addComment', (req, res) => { 
      var comment = req.body.comment;
      var id = req.body.id; 
      console.log(comment); 
      async function main() { 
        try { 
          if (client.isConnected()) { 
            await updatedComments(client,id, comment);
          }
          else { 
            await client.connect().catch(error => console.error());
            await updatedPosting(client,id, comment);
          }
        }
        catch(e) { 
          console.error(e);
        }
      }
      main().catch(console.error);
});
app.post('/upvote', (req, res) => { 
  //will increase upvote in database and send back the new updated number 
  id = req.body.id;
  upvotes = req.body.upvotes;
  console.log(id);
  async function main() { 
    try { 
      if (client.isConnected()) { 
        await updatedPosting(client,id);
      }
      else { 
        await client.connect().catch(error => console.error());
        await updatedPosting(client,id);
      }
    }
    catch(e) { 
      console.error(e);
    }
  }
  main().catch(console.error);
  });
//this is what to save 
app.post('/save', (req,res) => { 
  console.log(req);
  const title = req.body.title; 
  const url = req.body.url; 
  const txt = req.body.txt;
  const comment = req.body.comment; 
  const upvotes = req.body.upvotes;
  async function main() { 
    //set up from : https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
    //create a constant for our connection URI. 
    try { 
      //connect to cluster
        await client.connect();
        await createListing(client, {
          title: title, 
          url_string: url, 
          txt_body: txt,
          comment: comment, 
          upvotes: upvotes
      });
    }
    catch(e) { 
      console.error(e);
    }
  }
  main().catch(console.error);
})
app.get('/retrieveSaved', (req, res) => { 
  async function main() { 
    try { 
      if (client.isConnected()) { 
        let listOfId = await retrieveAllSaved(client);
        res.json({
          results: listOfId
        });
      }
      else { 
        await client.connect().catch(error => console.error());
        let listOfId = await retrieveAllSaved(client);
        console.log(listOfId);
        res.json({
          results: listOfId
        });
      }
    }
    catch(e) { 
      console.error(e);
    }
  }
  main().catch(console.error);
})
app.post('/deleteList', (req, res) => { 
  id = req.body.id;
  console.log(id);
  async function main() { 
    try { 
      if (client.isConnected()) { 
        await deleteSaved(client,id);
      }
      else { 
        await client.connect().catch(error => console.error());
        await deleteSaved(client,id);
      }
    }
    catch(e) { 
      console.error(e);
    }
  }
  main().catch(console.error);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.listen(PORT, () => { 
  console.log("I'm listening on Port " + PORT);
});
module.exports = router;
import React from 'react';
import {Row, Col, Container, Table} from 'reactstrap';

class Comments extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            id: props.location.aboutProps, 
            data: [],
            comment: '', 
            results: [], 
            updateTitle: '', 
            updatedUrl: '', 
            updatedText: ''
        };
        console.log(this.state.id);
        this.handleone = this.handleone.bind(this);
        this.handletwo = this.handletwo.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.sendNewPost = this.sendNewPost.bind(this);
        this.hideUpdate = this.hideUpdate.bind(this);
        this.one = this.one.bind(this); 
        this.two = this.two.bind(this);
        this.three = this.three.bind(this);
        this.four = this.four.bind(this);
    }

    async componentWillMount() { 
        console.log(this.state.id);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id
              }),
            json: true
        }
        const save = await fetch('/getPost', Options);
        const results = await save.json();
        this.setState({ 
            results: results
        });
        console.log(results);
    };

    async handleone() { 
        console.log(this.state.comment);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                comment: this.state.comment
              }),
            json: true
        }
        const save = await fetch('/addComment', Options);
        const results = await save.json(); 
        console.log(results);
            //return console.log("Im in handleClick");
            //get endpoint here to post to mongodb
            //send a json of everything in the text field title and url
    };

    //will delete post
    async handletwo() { 
        console.log(this.state.comment);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id
              }),
            json: true
        }
        const save = await fetch('/deleteList', Options);
        const results = await save.json(); 
        console.log(results);
    };

    hideUpdate() { 
        document.getElementById("updated_components").style.display = "none";
    };

    updatePost() { 
        document.getElementById("updated_components").style.display = "inline";
    };

    async sendNewPost() { 
        console.log(this.state.comment);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id, 
                new_title: this.state.updatedTitle,
                new_url: this.state.updatedURL, 
                new_text: this.state.updatedText
              }),
            json: true
        };
        const save = await fetch('/updatePost', Options);
        const results = await save.json(); 
        console.log(results);
    };

    one(e) { 
        this.setState({
            comment: e.target.value
        });
    };
    two(e) { 
        this.setState({
            updatedTitle: e.target.value
        });
    };
    three(e) { 
        this.setState({
            updatedURL: e.target.value
        });
    };
    four(e) { 
        this.setState({
            updatedText: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Container>       
            <Row>
               <Col>
               <p style={{marginTop: '270px'}}> 
                Comment&nbsp;&nbsp;&nbsp;&nbsp; 
            </p>

               </Col>

               <Col>
               <input type="text" style={{ position: 'absolute',top: "250px", 
                    width:"500px", height:"100px"}} onChange={this.one}></input>   
               </Col>
           </Row>
           
           <Row>
           <button style={{position:"absolute", top:"400px", left:"50px", marginLeft: '50%'}} onClick={ () => this.handleone()} variant="primary"> Comment </button>
           </Row>
           <Row> 
           ​      <button style={{position:"absolute", top:"200px", left:"50px", marginLeft: '50%'}} onClick={ () => this.handletwo()} variant="primary"> Delete Post </button>
               </Row> 
               <Row> 
               ​      <button style={{position:"absolute", top:"500px", left:"50px", marginLeft: '50%'}} onClick={ () => this.updatePost()} variant="primary"> Update Post </button>
               </Row>
               <Row> 
                   <div id="updated_components" style={{display:"none"}}> 
                   <div>
               UpdatedTitle: &nbsp;&nbsp;&nbsp;&nbsp;
               <input type="text" style={{ position: 'absolute',top: "550px", 
                    width:"500px", height:"25px"}} onChange={this.two}></input> 
                </div>
                <div>
                UpdatedUrl: &nbsp;&nbsp;&nbsp;&nbsp;    
                <input type="text" style={{ position: 'absolute',top: "650px", 
                    width:"500px", height:"25px"}} onChange={this.three}></input> 
                </div>
                <div>
                updatedText: UpdatedTitle: &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" style={{ position: 'absolute',top: "750px", 
                    width:"500px", height:"50px"}} onChange={this.four}></input> 
                </div>
                ​    <button style={{position:"absolute", top:"700px", left:"50px", marginLeft: '50%'}} onClick={ () => this.hideUpdate()} variant="primary"> Cancel Update</button>
                    <button style={{position:"absolute", top:"750px", left:"50px", marginLeft: '50%'}} onClick={ () => this.sendNewPost()} variant="primary"> Update!</button>
                </div>
               </Row>

            <p> {this.state.txt}</p>
                </Container>
            </div>
        )
    }
}

export default Comments;
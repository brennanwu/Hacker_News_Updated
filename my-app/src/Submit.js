import React from 'react';
import { Link } from 'react-router-dom';
class Submit extends React.Component {
    constructor() { 
        super();
        this.state = {
            Title: '',
            Url: '', 
            Text: '',
            data: [],
            comment: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.handleClickThree = this.handleClickThree.bind(this);
        // this.handleClickFour = this.handleClickFour.bind(this);
        // this.handleone = this.handleone.bind(this);
        this.handleTitle = this.handleTitle.bind(this); 
        this.commentArea = this.commentArea.bind(this);
        // this.addComments = this.addComments.bind(this);
        this.handleTXT = this.handleTXT.bind(this); 
        this.handleRetrieved = this.handleRetrieved(this);
        // this.one = this.one.bind(this); 
        this.handleURL = this.handleURL.bind(this);
    };
    async handleClickTwo () { 
        const save = await fetch('/retrieveSaved');
        const results_temp = await save.json();
        const results = await results_temp["results"];
        console.log(results);
        // let house = this; 
        this.setState({ 
            data : results
        });
        console.log(this.state.data);
    };
    async handleClickThree() { 
        const Options = {
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "5f5a54ca90650b068641d4d3"
              }),
            json: true
        };
        const update = await fetch('/upvote', Options);
        const results = await update.json(); 
        console.log(results);
    };
    async commentArea(e) { 
        this.setState({ 
            comment: e.target.value
        });
    };
    // async handleClickFour()  { 
    //         var txtArea = document.createElement("textarea");
    //         txtArea.style.position="absolute";
    //         txtArea.style.width="500px";
    //         txtArea.style.height="100px";
    //         txtArea.style.borderRadius="10px";
    //         txtArea.style.left = "600px";
    //         txtArea.setAttribute('onChange', this.commentArea); //this is not how to set 
    //         console.log("im after setAttribute");
    //         var but = document.createElement("button");
    //         but.style.position = "aboslute";
    //         but.style.left = "800px";
    //         console.log("im before onClick");
    //         but.onClick = this.addComments(); //this is not how to set 
    //         console.log("im after on click");
    //         but.variant = "primary";
    //         but.textContent = "YO";
    //         var parent = document.createElement("div");
    //         parent.appendChild(txtArea);
    //         parent.appendChild(but); 
    //         document.getElementById("reference_this").appendChild(parent);
    // };
    // async addComments() { 
    //     console.log("IM HIT");
    //     console.log(this.state.comment);
    //     const Options = { 
    //         method: 'POST', 
    //         headers: { 
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             comment: this.state.comment
    //           }),
    //         json: true
    //     }
    //     console.log("IM BEFORE RESULTS");
    //     const com = await fetch('/addComment', Options);
    //     console.log("IM AFTER RESULTS");
    //     const temp = await com.json();
    //     console.log(temp);
    // };
    // async handleone() { 
    //     console.log(this.state.Comment);
    //     const Options = { 
    //         method: 'POST', 
    //         headers: { 
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: "5f5a54ca90650b068641d4d3",
    //             comment: this.state.comment
    //           }),
    //         json: true
    //     }
    //     const save = await fetch('/addComment', Options);
    //     const results = await save.json(); 
    //     console.log(results);
    //         //return console.log("Im in handleClick");
    //         //get endpoint here to post to mongodb
    //         //send a json of everything in the text field title and url
    // };
    // one(e) { 
    //     this.setState({
    //         comment: e.target.value
    //     });
    // };
    async handleRetrieved() { 
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "5f5a54ca90650b068641d4d3"
              }),
            json: true
        }
        const save = await fetch('/getPost', Options);
        const results = await save.json(); 
        console.log(results);
    };
    async handleClick() { 
        console.log(this.state.Title);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.Title, 
                url: this.state.Url, 
                txt: this.state.Text,
                comment: [], 
                upvotes: 0
              }),
            json: true
        }
        const save = await fetch('/save', Options);
        const results = await save.json(); 
        console.log(results);
            //return console.log("Im in handleClick");
            //get endpoint here to post to mongodb
            //send a json of everything in the text field title and url
    };
    handleTitle(e) { 
        this.setState({
            Title: e.target.value
        })
    };
    handleURL(e) { 
        this.setState({ 
            Url: e.target.value
        })
    };
    handleTXT(e) { 
        this.setState({ 
            Text: e.target.value
        })
    };
    render() { 
        return ( 
        <div id="reference_this"> 
            <p> 
                Title&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type="text" style={{ position: 'absolute', 
                    width:"500px", height:"10px"}} onChange={this.handleTitle}></input>   
            </p>
            <p>
                url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" style={{ position: 'absolute', 
                    width:"500px", height:"10px"}} onChange={this.handleURL}></input>   
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or: 
            <p> Text&nbsp;&nbsp;&nbsp;&nbsp;  
                <textarea type="text" style={{ position: 'absolute', 
                    width:"500px", height:"125px", borderRadius:"10px"}} onChange={this.handleTXT}></textarea>   
            </p>
            <button style={{position:"absolute", top:"950", left:"50px"}} onClick={ () => this.handleClickThree()} variant="primary"> Upvote </button>
            <button style={{ position:"absolute", top:"250px", left:"50px" }} onClick={this.handleClick} variant="primary">Submit</button>
            <Link to='/retrieve'><button style={{ position:"absolute", top:"500px", left:"50px" }} variant="primary"> Retrieve </button></Link>
            {/* <p> 
                Comment&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type="text" style={{ position: 'absolute',top: "300px", 
                    width:"500px", height:"100px"}} onChange={this.one}></input>   
            </p>
            <button style={{position:"absolute", top:"850px", left:"50px"}} onClick={ () => this.handleone()} variant="primary"> Comment </button>
​            <button style={{position:"absolute", top:"1050px", left:"50px"}} onClick={this.handleRetrieved} variant="primary"> Retrieving </button> */}
​
            <p> {this.state.txt}</p>
        </div>
        
        );
    };
};
export default Submit;
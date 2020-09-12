import React from 'react';
import {Row, Col, Container, Table} from 'reactstrap';

class Comments extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            data: [],
            comment: ''
        };
        this.handleone = this.handleone.bind(this);
        this.one = this.one.bind(this); 
    } 
    async handleone() { 
        console.log(this.state.comment);
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "5f5a54ca90650b068641d4d3",
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
    one(e) { 
        this.setState({
            comment: e.target.value
        });
    };


    render() {
        const item = this.state.comment; 
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
           <button style={{position:"absolute", top:"600px", left:"50px", marginLeft: '50%'}} onClick={ () => this.handleone()} variant="primary"> Comment </button>
           </Row> 
​
            <p> {this.state.txt}</p>
                </Container>
            </div>
        )
    }
}

export default Comments;
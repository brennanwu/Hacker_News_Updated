import React from 'react';
import { Link } from 'react-router-dom'

class Submit extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            Title: '',
            Url: '', 
            Text: '',
            data: []
        };
        this.handleClick = this.handleClick.bind(this);
        // this.handleClick2 = this.handleClickTwo.bind(this);
        this.handleTitle = this.handleTitle.bind(this); 
        this.handleTXT = this.handleTXT.bind(this); 
        this.handleURL = this.handleURL.bind(this);
    } 

    // async handleClickTwo () { 
    //     const save = await fetch('/retrieveSaved');
    //     const results_temp = await save.json();
    //     const results = await results_temp["results"];
    //     console.log(results);
    //     // let house = this; 
    //     this.setState({ 
    //         data : results

    //     });
    // };
    

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
        <div> 
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
            <button style={{ position:"absolute", top:"250px", left:"50px" }} onClick={this.handleClick} variant="primary">Submit</button>
            <Link to='/retrieve'><button style={{ position:"absolute", top:"500px", left:"50px" }} > Retrieve </button></Link>
            <p> {this.state.txt}</p>
        </div>
        
        );
    }
}

export default Submit;
import React from 'react';

class Login extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            login_Email: '', 
            login_Password: '',
            signup_Email: '', 
            signup_Password: ''
        };
        this.updateLoginEmail = this.updateLoginEmail.bind(this); 
        this.updateLoginPass = this.updateLoginEmail.bind(this); 
        this.updateSignEmail = this.updateSignEmail.bind(this); 
        this.updateSignPass = this.updateSignPass.bind(this);
        this.Login = this.Login.bind(this); 
        this.Singup = this.Signup.bind(this);
    }

    updateLoginEmail(e) { 
        this.setState({
            login_Email: e.target.value
        });
    };

    updateLoginPass(e) { 
        this.setState({
            login_Password: e.target.value
        });
    };

    updateSignEmail(e) { 
        this.setState({
            signup_Email: e.target.value
        });
    };

    updateSignPass(e) { 
        this.setState({
            signup_Password: e.target.value
        });
    };

    async Login() { 
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.login_Email, 
                Pass: this.state.login_Password
              }),
            json: true
        }
        const save = await fetch('/login', Options);
        const results = await save.json(); 
        console.log(results);
    };

    async Signup() { 
        const Options = { 
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.signup_Email, 
                Pass: this.state.signup_Password
              }),
            json: true
        }
        const save = await fetch('/signUp', Options);
        const results = await save.json(); 
        console.log(results);
    };


    render() {
        return (
            <div>
                <div id="Login"style={{display:"inline-block"}}>
                    <p style={{position:'absolute', top:"200px"}}>LOGIN</p>
                    <p style={{position:'absolute', top:'250px', left:"50px"}}>EMAIL</p>
                    <input type="text" style={{ position: 'absolute',top: "275px", 
                        width:"500px", height:"25px", left:"50px"}} onChange={this.updateLoginEmail}></input> 
                    <p style={{position:'absolute', top:'310px', left:"50px"}}>PASSWORD</p>
                    <input type="text" style={{ position: 'absolute',top: "335px", 
                    width:"500px", height:"25px", left:"50px"}} onChange={this.updateLoginPass}></input>
                    <button style={{position:"absolute", top:"375px", left:"50px"}} onClick={ () => this.Login()} variant="primary"> Submit </button>
                </div> 

                <div id="SignUp"style={{display:"inline-block"}}>
                    <p style={{position:'absolute', top:"425px"}}>SIGNUP</p>
                    <p style={{position:'absolute', top:'450px', left:"50px"}}>EMAIL</p>
                    <input type="text" style={{ position: 'absolute',top: "475px", 
                        width:"500px", height:"25px", left:"50px"}} onChange={this.updateSignEmail}></input> 
                    <p style={{position:'absolute', top:'510px', left:"50px"}}>PASSWORD</p>
                    <input type="text" style={{ position: 'absolute',top: "535px", 
                    width:"500px", height:"25px", left:"50px"}} onChange={this.updateSignPass}></input>
                    <button style={{position:"absolute", top:"575px", left:"50px"}} onClick={ () => this.Signup()} variant="primary"> Submit </button>
                </div>
            </div>
        )
    }
}

export default Login;
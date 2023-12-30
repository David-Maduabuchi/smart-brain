import React from 'react';
import './Signin.css'


class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            loadingSign: false, //this is a new state to manage the loading sign
            showErrorMessage: false, //this is a new state to manage error visibility
        }
    }

    errorMessage = () => {
      this.setState({ showErrorMessage: true });
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }
    onClickEnter = (key) => {
        if (key.keyCode === 13) {
            this.onSubmitSignInForm();
        }
    }
    onSubmitSignInForm = () => {
        this.setState({
            loadingSign: true
        })
        fetch('https://smartai-zaraki-ki.onrender.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(res => res.json())
            // This is for the invalid credentials message
            .then(user => {
                if (user === "Please fill in the required credentials at Signin") {
                    this.errorMessage();
                }
                if (user === "wrong credentials ma boy") {
                    this.errorMessage();
                }
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
            .finally(() => {
              this.setState({
                loadingSign: false,
              })
            })

    }


    render() {
        const { onRouteChange } = this.props;
        return (

            <div className='br3 shadow-5 ba dark-gray b--black-10 mv4 mw6-ns center'>
                <div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
                    <div id="overlay" className="absolute absolute--fill o-70 z-unset"></div>

                    <div className="relative pa4 pa5-m">
                        <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
                        <div id="login" className="">
                        <div className="mb3">
                                <div className="inputcontainer">
                                    <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Username</label>
                                    <input
                                        placeholder="example123@gmail.com"
                                        type="email"
                                        onChange={this.onEmailChange}
                                        name="username"
                                        onKeyDown={this.onClickEnter}
                                        className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                                    <div className="icon-container">
                                        <i className={this.state.loadingSign ? "loadGod" : "select"}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="mb4">
                                {/* loader class */}
                                <div className="inputcontainer">
                                    <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
                                    <input
                                        type="password"
                                        onChange={this.onPasswordChange}
                                        name="password"
                                        onKeyDown={this.onClickEnter}
                                        className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                                    <div className="icon-container">
                                        <i className={this.state.loadingSign ? "loadGod" : "select"}></i>
                                    </div>
                                </div>
                                <span style={{ color: "#cc0000", paddingTop: "10px", fontFamily: "monospace" }}>
                                    {this.state.showErrorMessage && "Wrong Email or Password"}
                                </span>
                            </div>
                            <div>
                                <button
                                    onClick={this.onSubmitSignInForm}
                                    className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Sign In</button>
                            </div>
                        </div>

                        <div className="tc b f6 mt4 o-70 glow pa2 i">
                            <p onClick={() => onRouteChange('register')}
                                className='pointer' > New Member? Register</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Signin;
import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
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
        fetch('https://smartai-zaraki-ki.onrender.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
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
                                <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Username</label>
                                <input
                                    type="email"
                                    placeholder='example123@gmail.com'
                                    name="username"
                                    onKeyDown={this.onClickEnter}
                                    onChange={this.onEmailChange}
                                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                            </div>
                            <div className="mb4">
                                <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
                                <input
                                    type="password"
                                    onChange={this.onPasswordChange}
                                    name="password"
                                    onKeyDown={this.onClickEnter}
                                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                            </div>
                            <div>
                                <button
                                    // onClick={() => onRouteChange('home')} ---> I still have to make research on why we used arrow functions instead of just calling this.onRouteChange
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
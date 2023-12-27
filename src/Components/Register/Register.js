import React from 'react'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }
    onNewNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onSubmitSignInForm = () => {
        const { onRouteChange, loadUser } = this.props;
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(res => res.json())
            .then(user => {
                if(user.id) {
                    loadUser(user);
                    onRouteChange('home');
                }
            })
    }

    onClickEnter = (key) => {
        if (key.keyCode === 13) {
            this.onSubmitSignInForm();
        }
    }


    render() {
        return (
            <div className='br3 shadow-5 ba dark-gray b--black-10 mv4 mw6-ns center'>
                <div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
                    <div id="overlay" className="absolute absolute--fill o-70 z-unset"></div>

                    <div className="relative pa4 pa5-m">
                        <h1 className="serif tracked ma0 mb4 pv3">Register</h1>
                        <div id="login" className="">
                            <div className="mb3">
                                <label
                                    htmlFor="name"
                                    className="db f6 white-80 ttu ph2 mb2">Name</label>
                                <input
                                    onChange={this.onNewNameChange}
                                    onKeyDown={this.onClickEnter}
                                    type="text"
                                    name="name"
                                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                            </div>
                            <div className="mb3">
                                <label
                                    htmlFor="email"
                                    className="db f6 white-80 ttu ph2 mb2">Email</label>
                                <input
                                    onChange={this.onEmailChange}
                                    onKeyDown={this.onClickEnter}
                                    placeholder='example@gmail.com'
                                    type="email"
                                    name="email"
                                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                            </div>
                            <div className="mb4">
                                <label
                                    htmlFor="password"
                                    className="db f6 white-80 ttu ph2 mb2">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    onKeyDown={this.onClickEnter}
                                    type="password"
                                    name="password"
                                    className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                            </div>
                            <div>
                                <button
                                    onClick={this.onSubmitSignInForm}
                                    type='submit'
                                    className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Create New Account!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
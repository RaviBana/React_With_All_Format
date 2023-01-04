import React from 'react';
import Layout from '../Layout';
import Cookies from 'js-cookie';
import './loginCss.css'
class Login extends React.Component {
    constructor() {
        super();
        this.state = {

            username: '',
            Username: '',
            Password: '',
            error: ''
        }
    }

    handleEmail = (e) => {

        this.setState(
            { ...this.state, Username: e.target.value }
        )
    }
    handlePassword = (e) => {

        this.setState(
            { ...this.state, Password: e.target.value }
        )
    }
    handleSubmit = async (e) => {
        console.log(this.state)
        e.preventDefault();

        // this.setState(
        //     {...this.state, Username: e.target.value}
        // )
        const res = await fetch(
            "https://webmaster-fake-api.herokuapp.com/auth/login",
                      {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: this.state.Username,
                            password: this.state.Password
                        })
                     }
        )
        const result = await res.json()
        console.log('result', result)

        if (result.status === 401) {
            this.setState({ ...this.state, error: "Invalid username or password" })
        }
        if (result.status !== 401) {
            Cookies.set('Token', result.access_token)
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <Layout>


                <div id='loginForm'>
                    <h1>Login</h1>

                    <form action="" onSubmit={this.handleSubmit}>
                        <p>{this.state.error}</p>
                        <input type="text" name="Username" id="" placeholder='Enter your name' onChange={this.handleEmail} />
                        <input type="text" name="password" id="" placeholder='Enter your Password' onChange={this.handlePassword} />
                        <input type="submit" value="Login" id='btn' />
                    </form>

                </div>
            </Layout>
        )
    }

}
export default Login;
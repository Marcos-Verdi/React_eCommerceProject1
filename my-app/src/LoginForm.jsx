import React from "react"

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: "", password: "", message:""}
    }

    render() {
        return (
            <div className="col-lg-9">
                <h4  className="m-1 p-2 border-bottom">Login Form</h4>

                <div className="form-group form-row">
                    <label className="col-lg-4"><b>Email</b></label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({email: event.target.value})
                        }}/>
                </div>

                <div className="form-group form-row">
                    <label className="col-lg-4"><b>Password</b></label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({password: event.target.value})
                        }}/>
                </div>

                <div className="pull-right">
                    {this.state.message}
                    <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
                        Login
                    </button>
                </div>

            </div>
        )
    }

    onLoginClick = async() => {

        let response = await fetch(
            `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"})

        let body = await response.json()
        console.log(body)
        if (body > 0) {
            this.setState({message: <span className="text-success text-center">Successfully logged in!</span>})
        } else {
            this.setState({message: <span className="text-danger text-center">Please enter information again</span>})
        }
    }
}

export default LoginForm
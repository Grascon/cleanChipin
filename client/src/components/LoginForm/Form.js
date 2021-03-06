import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "./Formitems";

class Form extends Component {
    state = {
        email: "",
        password: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        if (this.state.email && this.state.password) {
            API.getUserLogin({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => localStorage.setItem('jwtToken', res.data.token))
                .then(this.props.onRequestClose)
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <div className="Row">
                <br></br>
                <form>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email Here"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        input type="password"
                        name="password"
                        placeholder="Whats the password?"
                    />
                    <FormBtn
                        disabled={!(this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                </form>

            </div>


        );
    }
}
export default Form;
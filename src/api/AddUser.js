import './../App.css';
import React from 'react';
import axios from 'axios';

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            hasError: false,
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {
        axios.post(process.env.REACT_APP_API_BASE_URL+`/user/store`, this.state)
        .then((response) => {
            this.setState({users: response.data});
        })
    }

    render() {
        return (
            <div>
                <h1>Add More User:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChanges} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddUser;

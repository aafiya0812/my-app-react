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
        this.handleNameChanges = this.handleNameChanges.bind(this);
        this.handleEmailChanges = this.handleEmailChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChanges(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChanges(event) {
        this.setState({email: event.target.value});
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
                        <input type="text" value={this.state.name} onChange={this.handleNameChanges} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChanges} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddUser;

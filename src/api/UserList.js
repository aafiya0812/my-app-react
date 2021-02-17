import './../App.css';
import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            hasError: false,
        };
    }

    componentDidMount () {
        this.getUsers();
    }

    getUsers = () => {
        console.log(`${process.env.REACT_APP_API_BASE_URL}`);
        axios.get(process.env.REACT_APP_API_BASE_URL+`/users`)
        .then((response) => {
            this.setState({users: response.data});
        })
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return (
            <div>
                <h1>List of Users:</h1>
                <ul>
                    { this.state.users.map(( user, index ) =>
                        <li key={ index }>{ user.name }</li>
                    ) }
                </ul>
                <button
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

export default UserList;

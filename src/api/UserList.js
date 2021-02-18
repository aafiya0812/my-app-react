import './../App.css';
import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

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
        axios.get(process.env.REACT_APP_API_BASE_URL+`/users`)
        .then((response) => {
            this.setState({users: response.data});
        })
    }

    deleteUser = (userId) => {
        axios.delete(process.env.REACT_APP_API_BASE_URL+`/user/delete/${userId}`)
        .then((response) => {
            this.getUsers();
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <div className="container">
                <Container maxWidth="lg">
                    <h1>List of Users:</h1>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Grid item xs={12} md={6}>
                            <div>
                                { this.state.users.map(( user, index ) =>
                                    <List key={ index }>
                                        <ListItem>
                                            <ListItemText
                                            primary={ user.name }
                                            secondary='Secondary text'
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete" onClick= {() => {this.deleteUser(user.id)}}>
                                                    <DeleteRoundedIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                ) }
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default UserList;

import React from 'react';
import axios from 'axios';
import './modal.css';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
    }

    componentDidMount () {
        this.setState({
            name: this.props.userName,
            email: this.props.userEmail,
        });
    }

    handleChanges = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit = (userId, event) => {
        axios.put(process.env.REACT_APP_API_BASE_URL+`/user/update/`+userId, this.state)
        .then((response) => {
            window.location.reload();
        })
    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <p>Edit User:</p>
                    <form onSubmit={() => this.handleSubmit(this.props.userId)}>
                        <label>
                            Name:
                            <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChanges} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" defaultValue={this.state.email} onChange={this.handleChanges} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <button type="button" onClick= {() => this.props.handleClose}>
                        Close
                    </button>
                </section>
            </div>
        );
    }
};

export default EditModal;

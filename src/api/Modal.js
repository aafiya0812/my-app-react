import './modal.css';

const EditModal = ({ handleClose, show, userId, userName, userEmail }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p>Edit User:</p>
                {userId}
                {userName}
                {userEmail}
                <form>
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
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default EditModal;

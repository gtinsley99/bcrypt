const ResModal = (props) => {
    return (
        <div className="modalBackgrnd">
            <div className="modal">
                <p>{props.res.message}</p>
                <p>Username: {props.res.user.username}</p>
                <button onClick={() => props.setShowModal(false)}>Close</button>
            </div>

        </div>
    )
};

export default ResModal;
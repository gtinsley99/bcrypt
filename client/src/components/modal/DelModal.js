const DeleteUserModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
  };

  return (
    <div className="modalBackgrnd">
      <div className="modal">
        {props.error.message === "Not Implemented" ? (
          <p>Username or password incorrect</p>
        ) : (
          <p>User deleted</p>
        )}
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default DeleteUserModal;

const DeleteUserModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
    props.setRes(null);
  };
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        {props.res === null ? (
          <p>User deleted</p>
        ) : (
          <p>Username or password incorrect</p>
        )}
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default DeleteUserModal;

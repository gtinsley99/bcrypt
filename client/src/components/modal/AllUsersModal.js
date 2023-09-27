const Modal = (props) => {
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        <h2>All users</h2>
        <p>{props.UsersList}</p>
        {/* {props.UsersList.map((username, index) => {
          return (
          <div key={index} className="usersBox">
            <p>{props.UsersList.username[index]}</p>
          </div>
          );
        })} */}
        <button onClick={() => props.setShowUsers(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

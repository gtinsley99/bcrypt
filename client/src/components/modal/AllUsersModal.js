const Modal = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setShowModal(false);
    props.setRes(null);
  };
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        <h2>All users</h2>
        <div className="usersBox">
        {props.usersList.map((username, index) => {
          return (
          <div key={index}>
            <p>{props.usersList[index]}</p>
          </div>
          );
        })}
        </div>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

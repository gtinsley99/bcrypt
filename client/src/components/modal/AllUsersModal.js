const Modal = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setShowModal(false);
    props.setError(null);
  };
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        <h2>All users</h2>
        {props.usersList.map((username, index) => {
          return (
          <div key={index} className="usersBox">
            <p>{props.usersList[index]}</p>
          </div>
          );
        })}
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

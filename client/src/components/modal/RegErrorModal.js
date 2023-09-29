const RegErrorModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
    props.setRes(null);
  };
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        {props.res.message === "Conflict" ? (
          <p>Error: Username taken</p>
        ) : (
          <p>Error: Invalid email address</p>
        )}
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default RegErrorModal;

const RegErrorModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
    props.setError(null);
  };
  return (
    <div className="modalBackgrnd">
      <div className="modal">
        {props.error.message === "Conflict" ? (
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

const RegErrorModal = (props) => {
    const handleClick = () => {
        props.setShowModal(false);
        props.setError(null);
      };
    
      return (
        <div className="modalBackgrnd">
          <div className="modal">
            <p>Error: {props.error.message}</p>
            <button onClick={handleClick}>Close</button>
          </div>
        </div>
      );
};

export default RegErrorModal;
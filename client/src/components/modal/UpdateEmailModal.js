const UpdateEmailModal = (props) => {
    const handleClick = () => {
      props.setShowModal(false);
      props.setRes(null);
    };
  
    return (
      <div className="modalBackgrnd">
        <div className="modal">
          {props.res === null ? (
            <p>Email updated</p>) : (
              <p>Invalid email address</p>
            )}
            
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    );
  };
  
  export default UpdateEmailModal;
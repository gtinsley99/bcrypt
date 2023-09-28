const UpdateEmailModal = (props) => {
    const handleClick = () => {
      props.setShowModal(false);
      props.setError(null);
    };
  
    return (
      <div className="modalBackgrnd">
        <div className="modal">
          {/* {props.error.message === "Not Implemented" ? ( */}
            <p>Email updated</p>
        {/* //   ) : (
        //     <p>User deleted</p>
        //   )} */}
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    );
  };
  
  export default UpdateEmailModal;
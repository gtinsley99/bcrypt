const UpdatePassModal = (props) => {
    const handleClick = () => {
      props.setShowModal(false);
      props.setError(null);
    };
  
    return (
      <div className="modalBackgrnd">
        <div className="modal">
          {props.error === null ? (
            <p>Password changed</p>
        ) : (
         <p>Username or password incorrect</p>
         )}
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    );
  };
  
  export default UpdatePassModal;
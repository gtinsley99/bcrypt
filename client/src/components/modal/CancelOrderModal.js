const CancelOrderModal = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.setShowModal(false);
        props.setError(null);
      };
      return (
        <div className="modalBackgrnd">
          <div className="modal">
            {props.error.message === "Not Found" ? (
              <div>
              <p>Order not found</p>
              </div>
            ) : ( 
              <div>
            <h2>Order cancelled</h2>
            <p>Item: {props.error.item}</p>
            <p>Quantity: {props.error.quantity}</p>
            </div>
            )}
           
            <button onClick={handleClick}>Close</button>
            </div>
        </div>
      );
};

export default CancelOrderModal;
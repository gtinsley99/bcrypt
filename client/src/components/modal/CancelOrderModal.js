const CancelOrderModal = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.setShowModal(false);
        props.setRes(null);
      };
      return (
        <div className="modalBackgrnd">
          <div className="modal">
            {props.res.message === "Not Found" ? (
              <div>
              <p>Order not found</p>
              </div>
            ) : ( 
              <div>
            <h2>Order cancelled</h2>
            <p>Item: {props.res.item}</p>
            <p>Quantity: {props.res.quantity}</p>
            </div>
            )}
           
            <button onClick={handleClick}>Close</button>
            </div>
        </div>
      );
};

export default CancelOrderModal;
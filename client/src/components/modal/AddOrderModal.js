const AddOrderModal = (props) => {
    const handleClick = () => {
        props.setShowModal(false);
        props.setError(null);
      };
    
      return (
        <div className="modalBackgrnd">
          <div className="modal">
            <h2>{props.error.message}</h2>
            <p>Item: {props.error.order.item}</p>
            <p>Quantity: {props.error.order.quantity}</p>
            <button onClick={handleClick}>Close</button>
          </div>
        </div>
      );
}

export default AddOrderModal;
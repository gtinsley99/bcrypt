const AddOrderModal = (props) => {
    const handleClick = () => {
        props.setShowModal(false);
        props.setRes(null);
      };
    
      return (
        <div className="modalBackgrnd">
          <div className="modal">
            <h2>{props.res.message}</h2>
            <p>Item: {props.res.order.item}</p>
            <p>Quantity: {props.res.order.quantity}</p>
            <button onClick={handleClick}>Close</button>
          </div>
        </div>
      );
}

export default AddOrderModal;
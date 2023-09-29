const OrdersModal = (props) => {

    const handleClick = () => {
      props.setShowModal(false);
      props.setError(null);
      props.setOrdersList(null);
    };
    return (
      <div className="modalBackgrnd">
        <div className="modal" id="ordersModal">
            <h2>Orders:</h2>
            {props.ordersList.length === null ? (
                <p>No orders</p>
            ): (props.ordersList.map((order, index) => {
                return (
                    <div key={index} className="orderInfo">
                      <p>ID: {order.id}</p>
                      <p>Item: {order.item}</p>
                      <p>Quantity: {order.quantity}</p>
                    </div>
                    );
            }))}
        
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    );
  };
  
  export default OrdersModal;
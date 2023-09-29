const OrdersModal = (props) => {

    const handleClick = () => {
      props.setShowModal(false);
      props.setRes(null);
      props.setOrdersList(null);
    };
    return (
      <div className="modalBackgrnd">
        <div className="modal">
            <h2>Orders:</h2>
            <div className="ordersModal">
            {props.ordersList.length === 0 ? (
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
          </div>
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    );
  };
  
  export default OrdersModal;
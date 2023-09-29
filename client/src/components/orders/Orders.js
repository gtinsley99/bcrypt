import AddOrder from "./AddOrder";
import ShowOrders from "./ShowOrders";
import CancelOrder from "./CancelOrder";

const Orders = (props) => {
    return(
        <div className="ordersCard">
            <div className="userOptions">
            <AddOrder setError={props.setError} setShowModal={props.setShowAddOrderModal}/>
            <CancelOrder setError={props.setError} setShowModal={props.setShowCancelOrderModal}/>
            </div>
            <div className="showOrders">
            <ShowOrders setError={props.setError} setOrdersList={props.setOrdersList} setShowModal={props.setShowOrdersModal} />
            </div>
        </div>
    )
};

export default Orders;
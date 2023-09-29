import AddOrder from "./AddOrder";
import ShowOrders from "./ShowOrders";
import CancelOrder from "./CancelOrder";

const Orders = (props) => {
    return(
        <div className="ordersCard">
            <div className="userOptions">
            <AddOrder setRes={props.setRes} setShowModal={props.setShowAddOrderModal}/>
            <CancelOrder setRes={props.setRes} setShowModal={props.setShowCancelOrderModal}/>
            </div>
            <div className="showOrders">
            <ShowOrders setRes={props.setRes} setOrdersList={props.setOrdersList} setShowModal={props.setShowOrdersModal} />
            </div>
        </div>
    )
};

export default Orders;
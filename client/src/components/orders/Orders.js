import AddOrder from "./AddOrder";
import ShowOrders from "./ShowOrders";
import CancelOrder from "./CancelOrder";

const Orders = (props) => {
    return(
        <div>
            <AddOrder setError={props.setError}/>
            <CancelOrder setError={props.setError} setShowModal={props.setShowCancelOrderModal}/>
            <ShowOrders setError={props.setError} setOrdersList={props.setOrdersList} setShowModal={props.setShowOrdersModal}/>
        </div>
    )
};

export default Orders;
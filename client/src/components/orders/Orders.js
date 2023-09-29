import AddOrder from "./AddOrder";
import ShowOrders from "./ShowOrders";

const Orders = (props) => {
    return(
        <div>
            <AddOrder setError={props.setError}/>
            {/* <CancelOrder setError={props.setError} /> */}
            <ShowOrders setError={props.setError} setOrdersList={props.setOrdersList}/>
        </div>
    )
};

export default Orders;
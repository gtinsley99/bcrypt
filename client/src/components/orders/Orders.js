import AddOrder from "./AddOrder";

const Orders = (props) => {
    return(
        <div>
            <AddOrder setError={props.setError}/>
            {/* <CancelOrder />
            <ShowOrders /> */}
        </div>
    )
};

export default Orders;
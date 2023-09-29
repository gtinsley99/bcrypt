import { ShowOrdersRoute } from "../../utils";
import { readCookie } from "../../common";


const ShowOrders = (props) => {
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let cookie = readCookie("jwt_token");
        if (cookie !== false){
            await ShowOrdersRoute(cookie, props.setOrdersList, props.setRes, props.setShowModal)
        };
    };

    return(
        <div>
        <h2>Show all your orders</h2>
        <button onClick={handleSubmit}>Show orders</button>
        </div>
    );
};

export default ShowOrders;
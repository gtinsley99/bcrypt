import { ListAllUsersRoute } from "../../utils";
import { readCookie } from "../../common";

const ListAllUsers = (props) => {
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let cookie = readCookie("jwt_token");
        if (cookie !== false){
            await ListAllUsersRoute(cookie, props.setUsersList, props.setRes, props.setShowModal)
        };
    };

    return(
        <div>
        <h2>Show all users</h2>
        <button onClick={handleSubmit}>Show Users</button>
        </div>
    );
};

export default ListAllUsers;
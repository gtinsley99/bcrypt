import { ListAllUsersRoute } from "../../utils";

const ListAllUsers = (props) => {
    let jwt_token = 1;
    const handleSubmit = async (e) => {
        e.preventDefault();
        await ListAllUsersRoute(jwt_token, props.setUsersList, props.setError, props.setShowModal)
    }
    return(
        <div>
        <h2>Show all users</h2>
        <button onClick={handleSubmit}>Show Users</button>
        </div>
    );
};

export default ListAllUsers;
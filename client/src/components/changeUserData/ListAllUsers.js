

const ListAllUsers = (props) => {


    return(
        <div>
        <h2>all users</h2>
        <button onClick={() => props.setShowUsers(true)}>Show Users</button>
        </div>
    );
};

export default ListAllUsers;
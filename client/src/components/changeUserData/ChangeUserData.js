import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import ListAllUsers from "./ListAllUsers";
import DeleteAccount from "./DeleteAccount";

const ChangeUserData = (props) => {
  return (
    <div className="userData">
      <div className="userOptions">
        <DeleteAccount setUser={props.setUser} setError={props.setError} setShowModal={props.setShowDelModal}/>
        <UpdateEmail />
      </div>
      <div className="userOptions">
        <UpdatePassword />
        <ListAllUsers setShowUsers={props.setShowUsers} />
      </div>
    </div>
  );
};

export default ChangeUserData;

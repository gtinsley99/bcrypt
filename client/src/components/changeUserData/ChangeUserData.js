import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import ListAllUsers from "./ListAllUsers";
import DeleteAccount from "./DeleteAccount";

const ChangeUserData = (props) => {
  return (
    <div className="userData">
      <div className="userOptions">
        <ListAllUsers
          setShowModal={props.setShowUsers}
          setError={props.setError}
          setUsersList={props.setUsersList}
        />
        <UpdateEmail
          setError={props.setError}
          setShowModal={props.setShowUpdEmailModal}
        />
      </div>
      <div className="userOptions">
        <UpdatePassword
          setError={props.setError}
          setShowModal={props.setShowUpdPassModal}
        />
        <DeleteAccount
          setUser={props.setUser}
          setError={props.setError}
          setShowModal={props.setShowDelModal}
        />
      </div>
    </div>
  );
};

export default ChangeUserData;

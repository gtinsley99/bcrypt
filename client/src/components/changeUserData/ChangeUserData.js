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
          setRes={props.setRes}
          setUsersList={props.setUsersList}
        />
        <UpdateEmail
          setRes={props.setRes}
          setShowModal={props.setShowUpdEmailModal}
        />
      </div>
      <div className="userOptions">
        <UpdatePassword
          setRes={props.setRes}
          setShowModal={props.setShowUpdPassModal}
        />
        <DeleteAccount
          setUser={props.setUser}
          setRes={props.setRes}
          setShowModal={props.setShowDelModal}
        />
      </div>
    </div>
  );
};

export default ChangeUserData;

import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import ListAllUsers from "./ListAllUsers";
import DeleteAccount from "./DeleteAccount";

const ChangeUserData = (props) => {
  return (
    <div className="userData">
      <DeleteAccount />
      <UpdateEmail />
      <UpdatePassword />
      <ListAllUsers setShowUsers={props.setShowUsers} />
    </div>
  );
};

export default ChangeUserData;

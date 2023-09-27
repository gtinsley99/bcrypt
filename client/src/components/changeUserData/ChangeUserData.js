import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import ListAllUsers from "./ListAllUsers";
import DeleteAccount from "./DeleteAccount";

const ChangeUserData = () => {
  return (
    <div className="userData">
      <DeleteAccount />
      <UpdateEmail />
      <UpdatePassword />
      <ListAllUsers />
    </div>
  );
};

export default ChangeUserData;

import { useState } from "react";
import { UpdatePasswordRoute } from "../../utils";

const UpdatePassword = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdatePasswordRoute(
      username,
      password,
      newPassword,
      props.setRes,
      props.setShowModal
    );
    setUsername("");
    setPassword("");
    setNewPassword("");
  };
  return (
    <div>
      <h2>Update password</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Username:</label>
          <input
            placeholder="Insert username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>Password:</label>
          <input
            placeholder="Insert password here..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>New Password:</label>
          <input
            placeholder="Insert new password here..."
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePassword;

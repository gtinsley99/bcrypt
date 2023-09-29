import { useState } from "react";
import { DeleteUserRoute } from "../../utils";

const DeleteAccount =  (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await DeleteUserRoute(username, password, props.setUser, props.setRes, props.setShowModal);
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h2>Delete Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Username:</label>
          <input
            placeholder="Insert username here..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div className="inputField">
          <label>Password:</label>
          <input
            placeholder="Insert password here..."
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          ></input>
        </div>
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
};

export default DeleteAccount;

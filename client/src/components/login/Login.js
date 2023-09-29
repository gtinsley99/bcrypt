import {useState} from "react";
import { LoginRoute } from "../../utils";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    await LoginRoute(username, password, props.setUser, props.setRes, props.setShowModal);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login here</h2>
      <form className="userLogin" onSubmit={loginSubmit}>
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
            type="password"
            placeholder="Insert password here..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

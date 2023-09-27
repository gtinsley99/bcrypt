import {useState} from "react";
import { LoginRoute } from "../../utils";

const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const loginSubmit = async (e) => {
    e.preventDefault();
    LoginRoute(username, password, props.setRes, props.setShowModal);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login here</h2>
      <form className="userLogin" onSubmit={loginSubmit}>
        <div className="inputField">
          <label for="usernameLogin">Username:</label>
          <input
            useid="usernameLogin"
            placeholder="Insert username here..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div className="inputField">
          <label for="passwordLogin">Password:</label>
          <input
            type="password"
            useid="passwordLogin"
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

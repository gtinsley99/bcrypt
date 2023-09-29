import { useState } from "react";
import { RegisterRoute } from "../../utils";

const Register = (props) => {
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    await RegisterRoute(regUsername, regEmail, regPassword, props.setUser, props.setRes, props.setShowModal);
    setRegUsername("");
    setRegEmail("");
    setRegPassword("");
  };

  return (
    <div>
      <h2>Make an account</h2>
      <form className="userLogin" onSubmit={formSubmit}>
        <div className="inputField">
          <label>Username:</label>
          <input
            placeholder="Insert username here..."
            onChange={(e) => setRegUsername(e.target.value)}
            value={regUsername}
          ></input>
        </div>
        <div className="inputField">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Insert email here..."
            onChange={(e) => setRegEmail(e.target.value)}
            value={regEmail}
          ></input>
        </div>
        <div className="inputField">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Insert password here..."
            onChange={(e) => setRegPassword(e.target.value)}
            value={regPassword}
          ></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

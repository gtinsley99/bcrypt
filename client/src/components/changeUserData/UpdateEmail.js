import { useState } from "react";
import { UpdateEmailRoute } from "../../utils";
import { readCookie } from "../../common";

const UpdateEmail = (props) => {
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(true);

  const activateButton = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    if (e.target.value === ""){
      setButton(true);
    } else {
      setButton(false)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let cookie = readCookie("jwt_token");
    if (cookie !== false) {
      await UpdateEmailRoute(cookie, email, props.setRes, props.setShowModal);
    };
    setEmail("");
    setButton(true);
  };

  return (
    <div>
      <h2>Update email</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>New email address:</label>
          <input
            placeholder="Insert new email here..."
            value={email}
            onChange={activateButton}
          ></input>
        </div>
        <button type="submit" disabled={button}>Update</button>
      </form>
    </div>
  );
};

export default UpdateEmail;

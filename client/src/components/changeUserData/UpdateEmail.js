import { useState } from "react";
import { UpdateEmailRoute } from "../../utils";
import { readCookie } from "../../common";

const UpdateEmail = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cookie = readCookie("jwt_token");
    if (cookie !== false) {
      await UpdateEmailRoute(cookie, email, props.setError, props.setShowModal);
    };
    setEmail("");
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
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmail;

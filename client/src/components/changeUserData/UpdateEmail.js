import { useState } from "react";

const UpdateEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

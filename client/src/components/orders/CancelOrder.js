import { useState } from "react";
import { CancelOrderRoute } from "../../utils";
import { readCookie } from "../../common";

const CancelOrder = (props) => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cookie = readCookie("jwt_token");
    if (cookie !== false && id !== "") {
      await CancelOrderRoute(cookie, id, props.setError, props.setShowModal);
    }
    setId("");
  };

  return (
    <div>
      <h2>Cancel an order</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Order ID:</label>
          <input type="number" min="0" value={id} onChange={(e) => setId(e.target.value)}></input>
        </div>
        <button type="submit">Cancel order</button>
      </form>
    </div>
  );
};

export default CancelOrder;

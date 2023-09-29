import { useState } from "react";
import { CancelOrderRoute } from "../../utils";
import { readCookie } from "../../common";

const CancelOrder = (props) => {
  const [id, setId] = useState("");
  const [button, setButton] = useState(true);

  const activateButton = (e) => {
    e.preventDefault();
    setId(e.target.value);
    if (e.target.value === ""){
      setButton(true);
    } else {
      setButton(false)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cookie = readCookie("jwt_token");
    if (cookie !== false && id !== "") {
      await CancelOrderRoute(cookie, id, props.setRes, props.setShowModal);
    }
    setId("");
    setButton(true);
  };

  return (
    <div>
      <h2>Cancel an order</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Order ID:</label>
          <input type="number" min="0" value={id} onChange={activateButton}></input>
        </div>
        <button type="submit" disabled={button}>Cancel order</button>
      </form>
    </div>
  );
};

export default CancelOrder;

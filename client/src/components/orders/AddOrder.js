import { useState } from "react";
import { AddOrderRoute } from "../../utils";
import { readCookie } from "../../common";

const AddOrder = (props) => {
  const [orderItem, setOrderItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let cookie = readCookie("jwt_token");
    if (cookie !== false && orderItem !== "") {
      await AddOrderRoute(cookie, orderItem, quantity, props.setRes, props.setShowModal);
    }
    setQuantity("");
  };
  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Item:</label>
          <select onChange={(e) => setOrderItem(e.target.value)}>
            <option value="">Select Item</option>
            <option value="pen">pen</option>
            <option value="pencil">pencil</option>
            <option value="ruler">ruler</option>
            <option value="rubber">rubber</option>
            <option value="notepad">notepad</option>
          </select>
        </div>
        <div className="inputField">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max="99"
            placeholder="Insert quantity here (1-99)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default AddOrder;

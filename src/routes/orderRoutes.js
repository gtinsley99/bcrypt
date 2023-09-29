const { Router } = require("express");
const orderRouter = Router();
const {addOrder, showOrders, deleteOrder} = require("../controllers/orderControllers");
const { tokenCheck } = require("../middleware");

// Route to add order for user
orderRouter.post("/orders/addorder", tokenCheck, addOrder);

// Route to show orders for user
orderRouter.get("/orders/showorders", tokenCheck, showOrders);

// Route to delete order for user
orderRouter.delete("/orders/cancelorder", tokenCheck, deleteOrder);

module.exports = orderRouter;
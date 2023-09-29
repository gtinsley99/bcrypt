const { Router } = require("express");
const orderRouter = Router();
const {addOrder} = require("../controllers/orderControllers");
const { tokenCheck } = require("../middleware");

// Route to add order for user
orderRouter.post("/orders/addorder", tokenCheck, addOrder);

module.exports = orderRouter;
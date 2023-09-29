const User = require("../models/users");
const Order = require("../models/orders");
const jwt = require("jsonwebtoken");

const addOrder = async (req, res) => {
    try {
      const order = await Order.create({
        item: req.body.item,
        quantity: req.body.quantity,
        UserId: req.user.id
      });
      res.status(201).json({
        message: "Order added",
        order: {
            item: order.item,
            quantity: order.quantity,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(501).json({
        message: error.message,
        detail: error
      });
    
    }
  };

  const showOrders = async (req, res) => {
    try {
        const listAllOrders = await Order.findAll({where:{UserId: req.user.id}});
        res.status(200).json({
          message: "All Orders for user are:",
          itemlist: listAllOrders.map((order) => order.item),
          quantitylist: listAllOrders.map((order) => order.quantity),
        });
      } catch (error) {
        console.log(error);
        res.status(501).json({
          message: error.message,
          detail: error
        });
      }
  };

  module.exports = {
    addOrder,
    showOrders,
  }
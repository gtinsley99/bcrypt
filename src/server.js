require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const User = require("./models/users");
const Order = require("./models/orders");

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Creates table if not found in db
const syncTables = () => {
    User.hasMany(Order);
    Order.belongsTo(User);
    User.sync();
    Order.sync({alter: true});
   
};


app.use(userRouter);
app.use(orderRouter);

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "API is healthy"
    })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
    syncTables();
});
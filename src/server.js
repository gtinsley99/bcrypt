require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./routes/routes");
const User = require("./models/users");

const port = process.env.PORT || 5001;

app.use(express.json());

// Creates table if not found in db
const syncTables = () => {
    User.sync();
};

app.use(userRouter);

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "API is healthy"
    })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
    syncTables();
});
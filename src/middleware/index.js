const User = require("../models/users");

const hashPassword = async (req, res, next) => {
    try {
        console.log("Entering hashPassword try area");
        next();
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            error: error
        });
    };
};

module.exports = hashPassword;
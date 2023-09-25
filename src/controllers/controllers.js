const User = require("../models/users");

const registerUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            message: "User registered",
            user: {
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error,
        });
    };
};

const listAllUsers = async (req, res) => {
    try {
        const listAllUsers = await User.findAll({});
        res.status(200).json({
            message: "All users from the database are:",
            userlist: listAllUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error,
        });
    };
};

module.exports = {
    registerUser,
    listAllUsers,
}
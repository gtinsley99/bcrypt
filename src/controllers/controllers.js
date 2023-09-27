const User = require("../models/users");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const privateKey = process.env.JWTPASSWORD;
    const payload = {
      username: req.body.username
    };
    const options = {
      expiresIn: "7d"
    };
    const token = jwt.sign(payload, privateKey, options);
    console.log(token);
    res.status(201).json({
      message: "User registered",
      user: {
        username: user.username,
        email: user.email,
        token: token
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
      detail: error
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDetails = await User.destroy({
      where: { username: req.body.username },
    });
    res.status(200).json({
      message: "User deleted",
      username: userDetails.username,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error
    });
  }
};

const updateEmail = async (req, res) => {
  try {
    const userDetails = await User.findOne({
      where: { username: req.body.username },
    });
    await userDetails.update({
      email: req.body.newemail,
    });
    await userDetails.save();
    res.status(200).json({
      message: "User email updated",
      username: req.body.newusername,
      email: req.body.newemail,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const userDetails = await User.findOne({
      where: { username: req.user.username },
    });
    await userDetails.update({
      password: req.body.password,
    });
    await userDetails.save();
    res.status(200).json({
      message: "User password updated",
      username: req.user.username
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({where: {username: req.body.username}});
    const privateKey = process.env.JWTPASSWORD;
    const payload = {
      username: req.body.username
    };
    const options = {
      expiresIn: "7d"
    };
    const token = jwt.sign(payload, privateKey, options);
    console.log(token);
    res.status(201).json({
      message: "User logged in",
      user: {
        username: user.username,
        email: user.email,
        token: token
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

module.exports = {
  registerUser,
  listAllUsers,
  deleteUser,
  updateEmail,
  updatePassword,
  loginUser
};

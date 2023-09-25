const User = require("../models/users");

const registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({
      message: "User registered",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error,
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
      detail: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDetails = await User.findOne({
      where: { username: req.body.username },
    });
    await userDetails.destroy();
    res.status(200).json({
      message: "User deleted",
      username: userDetails.username,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userDetails = await User.findOne({
      where: { username: req.body.username },
    });
    if (req.body.newusername === undefined){
        req.body.newusername = userDetails.username;
    };
    if (req.body.newemail === undefined){
        req.body.newemail = userDetails.email;
    };
    if (req.body.newpassword === undefined){
        req.body.newpassword = userDetails.password;
    };
    await userDetails.update({
        username: req.body.newusername,
        email: req.body.newemail,
        password: req.body.newpassword
    });
    await userDetails.save();
    req.body.username = req.body.newusername;
    res.status(200).json({
        message: "User details updated",
        username: req.body.newusername
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error,
    });
  }
};

module.exports = {
  registerUser,
  listAllUsers,
  deleteUser,
  updateUser,
};

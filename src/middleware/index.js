const User = require("../models/users");
const bcrypt = require("bcrypt");

// Encrypts user password to store in db
const hashPassword = async (req, res, next) => {
  try {
    if (req.body.newpassword !== undefined){
        req.body.password = req.body.newpassword
    };
    const saltRounds = parseInt(process.env.SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      error: error,
    });
  }
};

// Checks if username + password matches user in db
const passwordCheck = async (req, res, next) => {
  try {
    let match = false;
    const userDetails = await User.findOne({
      where: { username: req.body.username },
    });
    if (userDetails) {
      const compare = await bcrypt.compare(
        req.body.password,
        userDetails.password
      );
      if (compare) {
        match = true;
      };
    };
    // If not a match gives error, doesn't reach next
    if (!match || userDetails === undefined) {
      throw new Error("Password and username do not match");
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      error: error,
    });
  }
};

module.exports = {
  hashPassword,
  passwordCheck,
};

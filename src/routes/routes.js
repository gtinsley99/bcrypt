const { Router } = require("express");
const userRouter = Router();
const { registerUser, listAllUsers, deleteUser, updateEmail, updatePassword, loginUser } = require("../controllers/controllers");
const { hashPassword, passwordCheck, tokenCheck } = require("../middleware");

// Route to add a user, password hashed before add to db
userRouter.post("/users/register", hashPassword, registerUser);

// Route to list all users, passwordCheck 'guards' this
userRouter.get("/users/listallusers", tokenCheck, listAllUsers);

// Route to delete user, passwordCheck 'guards' this
userRouter.delete("/users/deleteuser", tokenCheck, deleteUser);

// Route to update email
userRouter.put("/users/updateemail", tokenCheck, updateEmail);

// Route to update password
userRouter.put("/users/updatepassword", tokenCheck, hashPassword, updatePassword);

// Route to login and create token
userRouter.get("/users/login", passwordCheck, loginUser);

module.exports = userRouter;

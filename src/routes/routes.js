const { Router } = require("express");
const userRouter = Router();
const { registerUser, listAllUsers, deleteUser, updateEmail, updatePassword, loginUser, loginWithToken } = require("../controllers/controllers");
const { hashPassword, passwordCheck, tokenCheck } = require("../middleware");

// Route to add a user, password hashed before add to db
userRouter.post("/users/register", hashPassword, registerUser);

// Route to list all users with token check
userRouter.get("/users/listallusers", tokenCheck, listAllUsers);

// Route to delete user with token check
userRouter.delete("/users/deleteuser", passwordCheck, deleteUser);

// Route to update email with token check
userRouter.put("/users/updateemail", tokenCheck, updateEmail);

// Route to update password with token check
userRouter.put("/users/updatepassword", passwordCheck, hashPassword, updatePassword);

// Route to login and create token
userRouter.post("/users/login", passwordCheck, loginUser);

// Route to login with token
userRouter.get("/users/loginwithtoken", tokenCheck, loginWithToken);

module.exports = userRouter;

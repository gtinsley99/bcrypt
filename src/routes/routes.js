const { Router } = require("express");
const userRouter = Router();
const { registerUser, listAllUsers } = require("../controllers/controllers");
const { hashPassword, passwordCheck } = require("../middleware");

// Route to add a user, password hashed before add to db
userRouter.post("/users/register", hashPassword, registerUser);

// Route to list all users, passwordCheck 'guards' this
userRouter.get("/users/listallusers", passwordCheck, listAllUsers);

// userRouter.delete("users/deleteuser", deleteUser);

// userRouter.put("/users/updatepassword", updatePassword);

module.exports = userRouter;

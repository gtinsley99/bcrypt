const { Router } = require("express");
const userRouter = Router();
const { registerUser, listAllUsers, deleteUser, updateUser } = require("../controllers/controllers");
const { hashPassword, passwordCheck } = require("../middleware");

// Route to add a user, password hashed before add to db
userRouter.post("/users/register", hashPassword, registerUser);

// Route to list all users, passwordCheck 'guards' this
userRouter.get("/users/listallusers", passwordCheck, listAllUsers);

// Route to delete user, passwordCheck 'guards' this
userRouter.delete("/users/deleteuser", passwordCheck, deleteUser);

// userRouter.put("/users/updatepassword", updatePassword);
userRouter.put("/users/updateuser", passwordCheck, updateUser, hashPassword);

module.exports = userRouter;

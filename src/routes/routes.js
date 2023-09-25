const {Router} = require("express");
const userRouter = Router();
const {registerUser} = require("../controllers/controllers");
const hashPassword = require("../middleware");

// Route to add a user
userRouter.post("/users/register", hashPassword, registerUser);

// userRouter.get("/users/listallusers", listAllUsers);

// userRouter.delete("users/deleteuser", deleteUser);

// userRouter.put("/users/updatepassword", updatePassword);

module.exports = userRouter;
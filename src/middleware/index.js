const bcrypt = require("bcrypt");


const hashPassword = async (req, res, next) => {
    try {
        const saltRounds = parseInt(process.env.SALT)
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
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
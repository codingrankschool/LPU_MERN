const express = require("express");

const authRouter = express.Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Public Routes
authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

// Logout (Optional)
authRouter.post(
    "/logout",
    authMiddleware.authT,
    authController.logout
);


module.exports = authRouter;
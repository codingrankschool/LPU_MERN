const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config()

const authController = {

    // Register
    register: async (req, res) => {

        try {

            const { name, email, password } = req.body;

            // Validation
            if (!name || !email || !password) {
                return res.status(400).json({
                    status: false,
                    msg: "All fields are required."
                });
            }

            // Check existing user
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(409).json({
                    status: false,
                    msg: "User already exists."
                });
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create User
            const user = await User.create({
                name,
                email,
                password: hashedPassword
            });

            res.status(201).json({
                status: true,
                msg: "User registered successfully.",
                user
            });

        } catch (error) {

            res.status(500).json({
                status: false,
                msg: "Registration failed.",
                error: error.message
            });

        }

    },

    // Login
    login: async (req, res) => {

        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    status: false,
                    msg: "Email and Password are required."
                });
            }

            // Find User
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({
                    status: false,
                    msg: "User not found."
                });
            }

            // Compare Password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({
                    status: false,
                    msg: "Invalid Password."
                });
            }

            // Generate Token
            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d"
                }
            );

            res.status(200).json({
                status: true,
                msg: "Login successful.",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });

        } catch (error) {

            res.status(500).json({
                status: false,
                msg: "Login failed.",
                error: error.message
            });

        }

    },

    // Logout
    logout: async (req, res) => {

        try {

            res.status(200).json({
                status: true,
                msg: "Logout successful. Please remove the token from the client."
            });

        } catch (error) {

            res.status(500).json({
                status: false,
                msg: "Logout failed.",
                error: error.message
            });

        }

    }

};

module.exports = authController;
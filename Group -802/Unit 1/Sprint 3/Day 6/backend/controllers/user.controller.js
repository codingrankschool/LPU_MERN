const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(200)
          .send({ status: false, msg: "All fields are required" });
      }

        let hash = await bcrypt.hash(password, 8)

        let newUser = new User({
          name,
          email,
          password: hash,
        });

        await newUser.save();

      res
        .status(201)
        .send({ status: true, msg: "User registered successfully", user: newUser});

    } catch (error) {
      res
        .status(400)
        .send({
          status: false,
          msg: "Something Went Wrong while registering the user",
          error: error,
        });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email: email });

      if (!user) return res.status(401).send({ status: false, msg: "Invalid email" });
      
      let isMatched = await bcrypt.compare(password, user.password);

      if(!isMatched) return res.status(401).send({status:false, msg:"Invaliad Password"})

      var token = jwt.sign({ id: user._id, email: user.email, role:user.role }, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});

      res.status(200).send({status:true, msg:"Logged In Successfully", token: token, user:user})
      

    } catch (error) {
      res
        .status(400)
        .send({
          status: false,
          msg: "Something went wrong while login the user",
          error: error,
        });
    }
  },
  logout: async (req, res) => {},
  getAllUsers:async(req, res)=>{
        try {
            let users = await User.find()
            res.status(200).send({status:true, msg:"Fetched all users successfully", users: users})
        } catch (error) {
            res.status(400).send({status:false, msg:"Something Went wrong while fetching users", error: error})
        }
  }
};

module.exports = userController;

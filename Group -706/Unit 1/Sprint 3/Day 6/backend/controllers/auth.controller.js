const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authController = {
    register: async(req, res)=>{
        try {
            const {email, password, name} = req.body

            if(!email || !password || !name){
                return res.status(200).send({status:false, msg:"All Fields are required"})
            }

            const hash = await bcrypt.hash(password, 8)

            let newUser = new User({
                name, 
                email,
                password: hash
            })

            await newUser.save()
            res.status(201).send({status:true, msg:"User registered successfully", user: newUser})

        } catch (error) {
            
        }
    },
    login: async(req, res)=>{ 
        try {
            const {email, password} = req.body

            let user = await User.findOne({email:email})
            if(!user){
                return res.status(401).send({status:false, msg:"Invalid Email"})
            }

            let isMatched = await bcrypt.compare(password, user.password)

            if(!isMatched){
                return res.status(401).send({status:false, msg:"Invalid Password"})
            }

            let token = jwt.sign({id: user._id, email:user.email, role: user.role},process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

            res.status(201).send({status:true, msg:"Logged in successfully", token: token, user: user});

        } catch (error) {
            res.status(400).send({status:false, msg:"Something Went wrong while login"});
        }
    },
    logout: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = authController
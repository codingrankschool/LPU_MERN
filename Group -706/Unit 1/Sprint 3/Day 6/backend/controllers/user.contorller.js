const User = require('../models/user.model')

const userController = {
    getAllUsers: async(req, res)=>{
        try {
            let allUsers = await User.find();
            res.status(201).send({status:true, msg:"Users fetched successfully", users: allUsers})

        } catch (error) {
            
        }
    },
   
}

module.exports = userController
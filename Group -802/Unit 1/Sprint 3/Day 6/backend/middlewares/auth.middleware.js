const jwt = require('jsonwebtoken')
require('dotenv').config()


const authMiddleware = {
    authT: async(req, res, next)=>{

        try {
            const token = req.headers.authorization
            let finalToken = token.split(" ")[1]

            var decoded = jwt.verify(finalToken, process.env.JWT_SECRET_KEY)
            req.user = decoded
            next()
        } catch (error) {
            return res.status(401).send({status:false, msg:"Invaid Token"})
        }
    }
}


module.exports = authMiddleware
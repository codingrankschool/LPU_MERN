const jwt = require('jsonwebtoken')
require('dotenv').config


const authMiddleware = {
    authT: (req, res, next)=>{

        try {
        const token = req.headers.authorization
        const finalToken = token.split(" ")[1]

        let decorded = jwt.verify(finalToken, process.env.JWT_SECRET_KEY)
        // console.log(decorded)
        req.user = decorded
        next()
        } catch (error) {
            res.status(401).send({status:false, msg:"Invalid Token"})
        }
    },
    authR: (roles)=>{
        return (req, res, next)=>{
            if(roles.includes(req.user.role)){
                next()
            }else{
                return res.status(403).send({status:false, msg:"You're not authorized"})
            }
        }
    }
}

module.exports = authMiddleware
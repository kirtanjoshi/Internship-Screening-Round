
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const authMiddleware = (req , res , next)=>{
    const token  = req.header("Authorization")?.replace("Bearer ","");
    if (!token ) return res.status(401).json({message : "Token not found"})
    const JWTSECRET = process.env.JWTSECRET;

    try{
        const decoded = jwt.verify(token, JWTSECRET );
        req.user = decoded;
        next()
    }
    catch (e) {
        res.status(500).json({
            message : "Invalid Token"
        })
    }

}
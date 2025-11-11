import {AuthModel} from "../model/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async(req , res) =>{
    const {email , password} = req.body;

    if (!email || !password ) return res.status(401).json({status: false , message: "Field are empty"})

    try{

        const existingEmail = await  AuthModel.findOne({email :email})
        if (existingEmail) return res.status(401).json({status: false , message: "Email Already Created"})

        const hashedPassword = await bcrypt.hash(password , 10)

        const newUser = await AuthModel.create({
            email : email,
            password :hashedPassword
        })

        return res.status(200).json({
            status:true,
            message : "User Created Successfully",
            data : newUser
        })
    }catch (e){
        return res.status(500).json({
            status :false,
            message : e
        })
    }

}


export const login = async(req, res)=>{
    const {email , password} = req.body;
    if (!email || !password ) return res.status(401).json({status: false , message: "Field are empty"})

  try{
      const existingUser = await  AuthModel.findOne({email :email})

      const isMatched = await bcrypt.compare(password , existingUser.password)
      console.log(isMatched)


      if (isMatched) {
          const token = jwt.sign(
              {id: existingUser.id },
              process.env.JWTSECRET
          )
          return res.status(200).json({
              status: true,
              message : "Login successfully",
              token : token
          })
      }
      return res.status(401).json({status: false , message: "Incorrect Value"})


  }catch (e) {
      return res.status(500).json({
          status :false,
          message : e
      })
  }


}
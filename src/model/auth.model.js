
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const authSchema = new Schema({
        email:{
            type : String,
            required : true,
            // unique :true
        },
        password:{
            type :String,
            required :true
        },
    },{
        timestamps :true
    },
)


export const AuthModel = mongoose.model("User", authSchema);
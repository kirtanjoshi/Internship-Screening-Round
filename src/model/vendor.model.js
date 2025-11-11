
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const vendorSchema = new Schema({

    name:{
        type : String,
        required : true,
    },
    price:{
        type :Number,
        required :true
    },
        // item : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : "Item",
        //     required : true
        // }

},{
    timestamps :true
},
    )


export const VendorModel = mongoose.model("Vendor", vendorSchema);
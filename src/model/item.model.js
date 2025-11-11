
import mongoose from "mongoose"
import {VendorModel} from "./vendor.model.js";
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type : String,
        required : true,
    },
    description:{
        type :String,
        required :true
    },
        vendors :[ {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Item",
            required : true
        }],


        image : {
        type : String,
        required :true
    }
},
);


export const ItemModel = mongoose.model("Item", itemSchema);
import {ItemModel} from "../model/item.model.js";
import {VendorModel} from "../model/vendor.model.js";

export const createItem =async (req, res)=>{
    const {name, description , image } = req.body;

   try{
       if (!image || !description || !name) return res.status(401).json({status: false , message: "Field are empty"})
        const Vendors = [];
       const createVendors = await VendorModel.create(
           req.body
       );
       Vendors.push(createVendors);
       const vendorId = Vendors.map((i) =>(
           i.id
       ))
       const newData = await ItemModel.create({
           name , description, image , vendorId
       })
       return res.status(200).json({
        status:true,
        message : "Item Created Successfully",
        data : newData
    })
   }catch (e){
       return res.status(500).json({
           message : e
       })
   }
}

export const getAllItem = async (req , res)=>{
    try{
      const data  =  await ItemModel.find()
      return res.status(200).json({
          message : data
      })
    }catch (e) {
        return res.status(500).json({
            message : e
        })
    }
}

export const updateItem = async  (req,  res) =>{
    const {id} = req.params;
    const data = req.body;
 try{
     const existingId = await ItemModel.findById(id);

     if (!existingId) return res.status(401).json({ status:false , message: "Item Not Found"})

     await ItemModel.findByIdAndUpdate(
         id , data
     )
     return res.status(200).json({
         status:true,
         message : "Item Updated Successfully",
     })

 }
 catch (e) {
     return res.status(500).json({
         message : e
     });
 }
}

export const deleteItem = async (req , res)=>{
    const {id} = req.params;
    try{
        const existingId = await ItemModel.findById(id);

        if (!existingId) return res.status(401).json({ status:false , message: "Item Not Found"})

        await ItemModel.findByIdAndDelete(id)
        return res.status(200).json({
            status :true ,
            message : "Item Successfully Deleted"
        })
    }catch (e) {
        return res.status(500).json({
            message : e
        });
    }
}
// import {VendorModel} from "../model/Vendor.item.js";
//
//
// export const createVendor =async (req, res)=>{
//     const {name, price , item } = req.body;
//
//    try{
//        if ( !price || !name ) return res.status(401).json({status: false , message: "Field are empty"})
//
//        const newData = await VendorModel.create({
//            name , price
//        })
//     return res.status(200).json({
//         status:true,
//         message : "Vendor Created Successfully",
//         data : newData
//     })
//    }catch (e){
//        return res.status(500).json({
//            message : e
//        })
//    }
// }
//
// export const getAllVendor = async (req , res)=>{
//     try{
//       const data  =  await VendorModel.find()
//       return res.status(200).json({
//           message : data
//       })
//     }catch (e) {
//         return res.status(500).json({
//             message : e
//         })
//     }
// }
//
// export const updateVendor = async  (req,  res) =>{
//     const {id} = req.params;
//     const data = req.body;
//  try{
//      const existingId = await VendorModel.findById(id);
//
//      if (!existingId) return res.status(401).json({ status:false , message: "Vendor Not Found"})
//
//      await VendorModel.findByIdAndUpdate(
//          id , data
//      )
//      return res.status(200).json({
//          status:true,
//          message : "Vendor Updated Successfully",
//      })
//
//  }
//  catch (e) {
//      return res.status(500).json({
//          message : e
//      });
//  }
// }
//
// export const deleteVendor = async (req , res)=>{
//     const {id} = req.params;
//     try{
//         const existingId = await VendorModel.findById(id);
//
//         if (!existingId) return res.status(401).json({ status:false , message: "Vendor Not Found"})
//
//         await VendorModel.findByIdAndDelete(id)
//         return res.status(200).json({
//             status :true ,
//             message : "Vendor Successfully Deleted"
//         })
//     }catch (e) {
//         return res.status(500).json({
//             message : e
//         });
//     }
// }
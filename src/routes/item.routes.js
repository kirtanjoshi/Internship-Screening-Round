import express from "express";
const router = express.Router();
import {createItem, deleteItem, getAllItem, updateItem} from "../controller/item.controller.js"
import {authMiddleware} from "../middleware/auth.middleware.js";


router.post('/',authMiddleware ,  createItem )
router.get('/' ,  getAllItem )
router.patch('/update/:id',authMiddleware ,  updateItem )
router.delete('/delete/:id',authMiddleware ,  deleteItem )

export default  router ;
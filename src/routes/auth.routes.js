import express from "express";
const router = express.Router();
import {createItem, deleteItem, getAllItem, updateItem} from "../controller/item.controller.js"
import {signUp, login} from "../controller/auth.controller.js";


router.post('/signup', signUp )
router.post('/login', login )

export default  router ;
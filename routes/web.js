import express from 'express'
import UserController from '../controllers/usercontroller.js'
const router=express.Router()


router.get('/',UserController.home)
router.get('/login',UserController.login)
router.post('/login',UserController.verifyLogin)
router.post('/reg',UserController.createUser)
router.get('/reg',UserController.register)

export default router;
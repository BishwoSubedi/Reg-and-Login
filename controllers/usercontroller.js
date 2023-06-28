import mongoose from "mongoose"
import userModel from "../models/User.js"
class  UserController{
    static home=(req,res)=>{
        res.render('home',{'title':'Home Page'})
    }
    static login=(req,res)=>{
        res.render('login',{'title':'Login Page'})
    }
   
   static verifyLogin=async(req,res)=>
   {
    try {
        //Object Destructing
        const {username,password}=req.body;
        // console.log(username)
        const result= await userModel.findOne({name:username})
        if(result != null){
        if(result.name==username && result.password==password){
            res.send(`<h1> Welcome ! Your Email is:</h1> <h2> ${result.email} </h2>`)
        }
        else{
            res.send('<h1> Invalid Credentials </h1>')
        }}
        else{
            res.send('<h1> You are not registered User please register and login</h1>')
        }
    } catch (error) {
        console.log(error)
    }
   }
  



    static register=(req,res)=>{
        res.render('reg',{'title':'Registration Page'})
    }

    //Registering  New User
    static  createUser=async(req,res)=>{
        try {
            const doc= new userModel({
                name:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            // console.log(doc);
            await doc.save()
            res.redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }
}
export default UserController;
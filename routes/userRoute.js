const express = require('express')
const user_Route = express()
const multer = require("multer")
const path = require('path')

const storage =multer.diskStorage({
    destination : function(req,file,cb){
      cb(null,path.join(__dirname,'../public/images'))
    },
    filename : function(req,file,cb){
      const name = Date.now()+'-'+file.originalname;
      cb(null,name);    
    }
  
  });
  
const upload=multer({storage:storage})

const userController = require('../controller/userController')

user_Route.post('/signup',userController.signup)
user_Route.post('/login',userController.login )
user_Route.get('/userProfile',userController.userProfile)
user_Route.post('/profileUpdate',upload.single('image'),userController.uploadImage)

module.exports = user_Route
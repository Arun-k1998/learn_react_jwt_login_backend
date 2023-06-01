const express = require('express')
const admin_Route = express()

const admincontroller = require('../controller/adminController')

admin_Route.post('/login',admincontroller.login)
admin_Route.get('/home',admincontroller.home)
admin_Route.post("/delete",admincontroller.deleteUser)
// admin_Route.put('/update',admincontroller.updateUser)
admin_Route.get('/userUpdate',admincontroller.userDetails)
admin_Route.post('/userUpdate',admincontroller.updateUser)


module.exports = admin_Route
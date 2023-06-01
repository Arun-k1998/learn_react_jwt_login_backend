require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors")
mongoose.connect(process.env.MONGOCONNECT,{ useNewUrlParser: true }).catch(e=>{console.log('connection error',e.message);})
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')

app.use('/',userRoute)
app.use('/admin',adminRoute)

app.listen(3001,()=>{
    console.log('server running in 3001.....');
})

//nodemon index
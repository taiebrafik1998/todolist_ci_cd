const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const routes = require('./routes/ToDoRoute')

require('dotenv').config()
const app = express()

const PORT = process.env.port || 5001 //port par defaut
app.use(express.json())
app.use(cors())

//connect to db
console.log("attemt connection tto bd .....")
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to DATA BASE ")).catch((err)=>console.log(err))

app.use(routes)
app.listen(PORT,()=> console.log(`Listning on :  ${PORT}`))
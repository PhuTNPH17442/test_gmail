const express = require('express')
const doteNV = require ('dotenv')
const { default: mongoose } = require('mongoose')
const UserRouter = require('./router/user')
const IndexRouter = require('./router/index')
const app = express()


doteNV.config()

//mongoose connect 
mongoose.connect(process.env.MONGODB_URL,()=>
{
  console.log("Conect to mongoDB")
})

app.use('/user',IndexRouter)
const POST = process.env.POST||5000
app.listen(POST,()=> console.log(`Sever running in `+POST))
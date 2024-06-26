const express = require('express')
const app = express()
const dotenv = require("dotenv")
const router = require('./routes/user.routes')
const mongoose  = require('mongoose')
dotenv.config()

const cors = require("cors")



const PORT = process.env.PORT
const URI = process.env.URI

 // to get back our details from user
 app.use(express.urlencoded({extended:true}));

 // connecting postman to our code
 app.use(express.json())

app.use('/', router)
app.use(cors())

app.listen(PORT, () => {
  console.log("Example app listening on port" , PORT)

  mongoose.connect(URI)
  .then(()=>{
      console.log("connected");
  })
  .catch((err)=>{
      console.log("not working", err);
  })
  
})
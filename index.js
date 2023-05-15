//First we will create our server

const express = require("express");
const coursesRouter=require("./routes/courses")
require("dotenv").config()

//We will use mongoose to connect to mongodb
//const mongoose = require('mongoose')
const database = require('./sqlConnection');

const app = express();
app.use("/api/v1/courses", coursesRouter)   


// mongoose.connect(process.env.DB_CONNECTION_URL)Munishka_Resume.pdf
//   .then(() => {
//     console.log("Connected to db...")
//   })
//   .catch(err => {
//     console.error(err)
//   })


app.listen(process.env.PORT, () => {
  console.log("Server is running....");
})


app.get("/getMysqlStatus", (req, res) => {
  
  database.ping((err) => {
    if(err) return res.status(500).send("MySQL Server is Down");
      
    res.send("MySQL Server is Active");
  })
});


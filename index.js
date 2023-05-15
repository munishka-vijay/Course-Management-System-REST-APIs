//First we will create our server

const express = require("express");
const coursesRouter=require("./routes/courses");
const bodyParser=require('body-parser');
require("dotenv").config();
//We will use mongoose to connect to mongodb
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter); 


mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("Connected to db...")
  })
  .catch(err => {
    console.error(err)
  })


app.listen(process.env.PORT, () => {
  console.log("Server is running....");
})

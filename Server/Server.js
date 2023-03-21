const express = require('express')
require('dotenv').config()
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./Config/Database.js");
const UserRouter = require("./Routes/UserRoute");
const ProfileRouter = require("./Routes/ProfileCreation");

//configration
const app = express();
app.use(cors());
mongoose.set('strictQuery', false);
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(express.json());
connection();



//Routes

app.use('/', UserRouter);
app.use("/profile", ProfileRouter)

//app listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server is running on port :" + port)
})
const express = require('express')
require('dotenv').config()
const fileUpload = require('express-fileupload')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./Config/Database.js");
const UserRouter = require("./Routes/UserRoute");
const ProfileRouter = require("./Routes/ProfileCreation");
const JobRouter = require('./Routes/Jobs');


//configration
const app = express();
app.use(cors());
mongoose.set('strictQuery', false);
app.use(express.urlencoded({ extended: true }))
// app.use(fileUpload())
app.use(express.json());


app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({
//     extended: true
// }));


connection();



//Routes

app.use('/', UserRouter);
app.use("/profile", ProfileRouter)
app.use("/job", JobRouter)

//app listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server is running on port :" + port)
})
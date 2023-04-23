const express = require('express')
// require('dotenv').config()
// const fileUpload = require('express-fileupload')
// var bodyParser = require('body-parser')
// const mongoose = require('mongoose');
// const cors = require("cors");
// const connection = require("./Config/Database.js");
// const UserRouter = require("./Routes/UserRoute");
// const ProfileRouter = require("./Routes/ProfileCreation");
// const JobRouter = require('./Routes/Jobs');
// const RecruitmentRouter = require('./Routes/RecruitmentCycle.js');


//configration
const app = express();
// app.use(cors());
// mongoose.set('strictQuery', false);
// app.use(express.urlencoded({ extended: true }))
// // app.use(fileUpload())
// app.use(express.json());


// app.use(bodyParser.json());


// connection();



//Routes

app.use("/", (req, res, next) => {
    res.send("welcome");
})
// app.use('/', UserRouter);
// app.use("/profile", ProfileRouter)
// app.use("/job", JobRouter)
// app.use('/details', RecruitmentRouter)
//app listening




const port = process.env.PORT || 8080;
try {
    app.listen(3200, () => {
        console.log("server is running on port :" + port)
    })
}

catch (e) {
    console.log("SERVER COULDN'T GET START")
}


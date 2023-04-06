const express = require("express")
const app = express();


const ApplyForJob = async (req, res, next) => {
    // console.log(req.file);
    // console.log(req.body)
    // return res.send(req.body)
    // console.log(req.file);
    // console.log(req.file)
    // res.send(req.body)


    try {
        // console.log(req.file);
        // console.log(req.body)
        console.log(req.file.path)
        res.send(req.file);
    } catch (err) {
        res.send(400);
    }

}

module.exports = ApplyForJob;
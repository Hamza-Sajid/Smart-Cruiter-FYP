// -> IMPORTS
const ProfileRouter = require('../Controllers/Setup Profile/Profile_Setup');
const multer = require('multer')
// -> INITIALIZATIONS
const express = require('express');
const AuthMiddleware = require('../Middleware/AuthMiddleware');
const VerifyToken = require('../Middleware/VerifyToken');
const ProfileSetup = express.Router();

//* ** MULTER CONFIGURATION  ** */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //so it will store the images in the public directory
        cb(null, "Models");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const multerFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: storage, multerFilter });

// *******************************************************************


// -> MAIN CODE

//1st Time Profile Setup Route
ProfileSetup.post("/setup", AuthMiddleware, ProfileRouter);

ProfileSetup.post("/", (req, res) => {
    res.send("welcome")
})
// -> EXPORT
module.exports = ProfileSetup;

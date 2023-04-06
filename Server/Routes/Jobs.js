const express = require('express');
const ApplyForJob = require('../Controllers/Jobs/ApplyForJob');
const GetAllPostedJobs = require('../Controllers/Jobs/GetAllPostedJobs');
const GetJob = require('../Controllers/Jobs/GetJobs');
const GetSelectedJobDescription = require('../Controllers/Jobs/GetSelectedJobDescription');
const PostJobRouter = require('../Controllers/Jobs/PostJob');
const multer = require('multer');

const JobRouter = express.Router();

JobRouter.post("/post", PostJobRouter)
JobRouter.post("/get-jobs", GetJob);
JobRouter.post("/get-jobs/details", GetSelectedJobDescription);
JobRouter.post("/get-all-jobs", GetAllPostedJobs)




// ~~~~~~~~~~~~~~~~~~~~~
//  HANDLING UPLOAD FILE
// ~~~~~~~~~~~~~~~~~~~~~




//* ** MULTER CONFIGURATION  ** */

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         //so it will store the images in the public directory
//         cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });

// const multerFilter = (req, file, cb) => {
//     if (
//         file.mimetype === "image/png" ||
//         file.mimetype === "image/jpg" ||
//         file.mimetype === "image/jpeg"
//     ) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({ storage: storage, multerFilter });



// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype !== 'application/pdf') {
//             return cb(new Error('Invalid file type, only PDF files are allowed'));
//         }
//         cb(null, true);
//     },
// });
// *******************************************************************

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })


JobRouter.post("/apply-to-job", upload.single('profile'), ApplyForJob)

module.exports = JobRouter;
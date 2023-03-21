
const multer = require('multer')

const data = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/jpg|jpeg|png/)) {
            cb(new Error("file is not in supported format"), false);
            return
        }
        cb(null, true)
    }
})

module.exports = data;
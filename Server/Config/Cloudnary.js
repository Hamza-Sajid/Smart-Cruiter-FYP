const Cloudinary = require('cloudinary');

const cloud = Cloudinary.config({
    // CLOUD_NAME: process.env.CLOUD_NAME,
    // API_KEY: process.env.API_KEY,
    // API_SECRET: process.env.API_SECRET
    cloud_name: "ditpfg4gv",
    api_key: "953883297752738",
    api_secret: "-iNX-b7s2NBccqEe1y54zK2FUdc"


});


module.exports = cloud;
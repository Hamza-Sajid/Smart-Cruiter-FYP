const Cloudinary = require('cloudinary');

const cloud = Cloudinary.config({

    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET

});


module.exports = cloud;
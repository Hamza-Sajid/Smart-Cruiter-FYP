const express = require("express");
const app = express();
const Cloudinary = require("cloudinary");
const cloud = require("../../Config/Cloudnary.js");
const OrganizationModal = require("../../Models/Organization_Model");

const UpdateProfilePicture = async (req, res, next) => {
    // // -> Storing selected image to cloud

    const file = req.file;
    const userId = req.body.userId;
    if (file && userId) {
        const findOrganization = await OrganizationModal.findById(userId);
        const img = await Cloudinary.v2.uploader.upload(req.file.path);
        const { url } = img;
        findOrganization.logo = url;
        await findOrganization.save();
        res.send("done")
    }
};

module.exports = UpdateProfilePicture;

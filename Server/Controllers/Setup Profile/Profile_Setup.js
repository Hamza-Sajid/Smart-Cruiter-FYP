const { json } = require('express');
const express = require('express');
const app = express();
const Cloudinary = require('cloudinary');
const cloud = require("../../Config/Cloudnary.js");

const OrganizationModal = require('../../Models/Organization_Model.js');
const userModel = require('../../Models/User_Model.js');
const ProfileRouter = async (req, res, next) => {
    //    --> ORGANIZATION DEATILS EXTRACTION

    const org_name = req.body.detailed_data.name;

    const phone = req.body.detailed_data.phone;

    const website_link = req.body.detailed_data.website_link;
    const logo = req.body.detailed_data.logo_url;
    const departments = req.body.detailed_data.departments;
    const address = req.body.detailed_data.address;
    const city = req.body.detailed_data.city;
    const country = req.body.detailed_data.country;
    const region = req.body.detailed_data.region;
    const fb_link = req.body.detailed_data.fb_link;
    const insta_link = req.body.detailed_data.insta_link;
    const yt_link = req.body.detailed_data.yt_link;
    const linkedIn_link = req.body.detailed_data.linkedin_link;

    // // --> EXTRACTING TEAM DATA



    const { name, email, role } = req.body.team_details;
    const data = [{ name, email, role }];
    var departments2 = [departments]
    departments2 = departments2[0].list

    // // -> to get the image url path    
    // console.log(req.file.path)

    // // -> Storing selected image to cloud

    // const img = await Cloudinary.v2.uploader.upload(req.file.path);
    // const img_url = img.secure_url;

    // -> so 1st check is there is valid reg user which is trying to setup org account
    const checkUser = await userModel.findOne({ username: 'Hamza' })
    if (checkUser) {


        const org = await new OrganizationModal({
            "username": 'IamKhan2',
            "password": "Hamza123",
            "organization_name": org_name,
            "phoneNo": phone,
            "website": website_link,
            "logo": "Temp_URL",
            // "departments": ` ['hr'],['markeeting']`,
            "departments": departments2,

            "office_address": address,
            "office_city": city,
            "office_country": country,
            "fb_url": fb_link,
            "linkedIn_url": linkedIn_link,
            "insta_url": insta_link,
            "yt_url": insta_link,
            "team_members": data
        })
        try {
            await org.save()

            return res.status(200).json({ message: "user saved" });

        } catch (error) {

            return res.status(500).json(error)
        }


    }

    return res.status(404).json({ message: "Invalid username" })
}



module.exports = ProfileRouter;
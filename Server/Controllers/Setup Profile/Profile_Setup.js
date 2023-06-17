const { json } = require('express');
const express = require('express');
const app = express();
const Cloudinary = require('cloudinary');
const cloud = require("../../Config/Cloudnary.js");

const OrganizationModal = require('../../Models/Organization_Model.js');
const userModel = require('../../Models/User_Model.js');
const { findOneAndUpdate } = require('../../Models/Organization_Model.js');
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
    // console.log(data);
    var departments2 = [departments]
    departments2 = departments2[0].list

    // // -> to get the image url path    
    // console.log(req.file.path)

    // // -> Storing selected image to cloud

    // const img = await Cloudinary.v2.uploader.upload(req.file.path);
    // const img_url = img.secure_url;

    // -> so 1st check is there is valid reg user which is trying to setup org account
    const checkUser = await userModel.findById(req.body.userID)
    console.log(checkUser)
    if (checkUser.org_registered == false) {

        console.log('1st time hai');

        const org = await new OrganizationModal({
            "username": checkUser.username,
            "password": "Hamza123",
            "organization_name": org_name,
            "phoneNo": phone,
            "website": website_link,
            "logo": "Temp_URL",
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



        // findOneAndUpdate

        try {

            //Now 1st i have to get the acutall id value from _id with this code

            var user_id = org._id;
            user_id = user_id.toString();
            console.log(user_id)
            const profile = await userModel.findOneAndUpdate(
                { _id: req.body.userID }, // replace with the organization ID
                { $set: { org_registered: true, org_id: user_id } }, // use $set operator to update the field
                { new: true }, // return the updated document
            );
            await org.save()
            await profile.save();
            console.log(profile)


            return res.status(200).json({ message: "user saved" });

        } catch (error) {
            // console.log(error)
            return res.status(500).json(error)
        }


    }

    //1st Make Sure Is Organization is already registered or not
    else if (checkUser.org_registered == true) {
        // console.log('2nd time hai');
        // console.log('already organizaion is REGISTERED  :-> STATUS  = ' + checkUser.org_registered);
        return res.status(400).json({ message: "Already Organization Setup Or Fill Employee All Details" })
    }


    return res.status(404).json({ message: "Invalid username" })
}



module.exports = ProfileRouter;
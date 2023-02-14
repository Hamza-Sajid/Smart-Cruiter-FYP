const { json } = require('express');
const express = require('express');
const OrganizationModal = require('../Models/Organization_Model');
const userModel = require('../Models/User_Model');
const app = express();
const ProfileRouter = express.Router();

ProfileRouter.post("/add", async (req, res) => {
    const { username, password, organization_name, phoneNo, website, logo, departments, office_address, office_city, office_country, fb_url, linkedIn_url, insta_url, yt_url, team_members } = req.body;

    // const checkUser = await userModel.findOne({ username: username });
    // if (checkUser) {

    const org = await new OrganizationModal({
        "username": "CSduasdsa",
        "password": "asjdlsa123",
        "organization_name": "asdsa",
        "phoneNo": 123213,
        "website": "asd@asd.com",
        "logo": "adsds",
        "departments": ["hr", "markeeting"],
        "office_address": "islamabad",
        "office_city": "attock",
        "office_country": "pakistan",
        "fb_url": "https://google.com",
        "linkedIn_url": "https://google.com",
        "insta_url": "https://google.com",
        "yt_url": "https://google.com",
        "team_members": [{ "name": "hamza" }, { "email": "asd@asd.com" }, { "role": "admin" }]
    })
    try {
        await org.save()
        return res.send(200).json({ message: "user saved" });

    } catch (error) {
        return res.send(error)
    }
    return res.status(404).json({ message: "Invalid username" })

}
)


module.exports = ProfileRouter;
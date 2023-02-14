const express = require("express");
const userModel = require("../../Models/User_Model");
const app = express();

const VerifyMail = async (req, res, next) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ error: "ID is required!" });
    }
    const findUser = await userModel.findByIdAndUpdate(id, { isVerified: true });
    try {
        await findUser.save();
        const html = `   
        <html><head><title>Verified</title>     
        </head>       <body>         <h1 style="color:#1E90FF; , textAlign:'center'">           Email verification completed, you can login now.<br/><a href="http://localhost:3000">Go to Home</a></h1></body></html>
        `;
        res.send(html);
    } catch (e) {
        res.send("Eroor :_ " + e);
    }
};

module.exports = VerifyMail;

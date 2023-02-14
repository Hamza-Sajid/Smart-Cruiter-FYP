const express = require("express");
const userModel = require("../../Models/User_Model");
const bcrypt = require("bcrypt");

const app = express();

const updatePassword = async (req, res, next) => {

    const { password, id } = req.body;
    console.log(password, id);
    if (!password) {
        return res.status(400).json({ error: "Must fill new-password field." });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const findUser = await userModel.findOneAndUpdate(
            { _id: id },
            { password: hashedPassword }
        );
        await findUser.save();
        return res.status(200).json({ error: "Password updated" });
    } catch (error) {
        return res.status(500).json({ error: "Server error, something went wrong" });
    }
};

module.exports = updatePassword;

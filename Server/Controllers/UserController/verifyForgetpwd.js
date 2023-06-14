const express = require("express");
const userModel = require("../../Models/User_Model");
const app = express();

const verifyForgetPwd = async (req, res, next) => {

    const { params, inputCode } = req.body;

    console.log("This is the otp code")
    console.log(params, inputCode);
    //to remove space and , from code (as input is coming from an array[])
    let newVal = inputCode.toString();
    newVal = newVal.split(" ").pop()
    newVal = newVal.replace(/,/g, '');



    try {
        console.log(newVal, params)
        const user = await userModel.findOneAndUpdate(
            {
                $and: [{ email: params }, { passwordResetToken: newVal }],
            },
            { passwordResetToken: null }
        );
        if (!user) {
            console.log('invalid otp');
            return res.status(404).json({ error: "Invalid otp_code" });
        }

        res.status(200).json({ id: user._id })
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
    //this params will shared to the next route with req.data method.
    req.data = {
        params: params,
    };
    next();
};

module.exports = verifyForgetPwd;

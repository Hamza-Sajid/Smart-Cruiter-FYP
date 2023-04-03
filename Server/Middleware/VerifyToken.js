const userModel = require("../Models/User_Model");

const VerifyToken = async (req, res, next) => {


    try {
        const findUser = await userModel.findById({ _id: req.body.userID })
        if (findUser) {
            res.send(findUser)
        }
        else {
            res.send("INVALID TOKEN");
        }
    } catch (error) {
        console.log(error);
    }


}

module.exports = VerifyToken;
const express = require("express");
const Candidate = require("../../Models/Candidate");
const app = express();

const SubmitFeedback = async (req, res, next) => {


    const { id, startRating } = req.body;

    //now i want to enfore that if user by mistake put wrong value he should be able to put new value again

    var user = await Candidate.findById(id);
    if (user) {
        if (user.feedback_form == null || user.feedback_form == "") {
            user.feedback_form = [
                startRating.first,
                startRating.second,
                startRating.third,
                startRating.fourth,
                startRating.fifth,
            ];

            await user.save();
            return res.status(200).json({ message: "Saved" });
        } else {
            //so else part is dealing that if there is alrady any value
            // in  object of -> feedback_form
            //    than 1st i will clean that value and than add the new value

            let abc = user.feedback_form;

            abc = null;
            user.feedback_form = abc;

            user.feedback_form = [
                startRating.first,
                startRating.second,
                startRating.third,
                startRating.fourth,
                startRating.fifth,
            ];
            await user.save();
            return res.status(200).json({ message: "Saved" });
        }
    } else {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = SubmitFeedback;

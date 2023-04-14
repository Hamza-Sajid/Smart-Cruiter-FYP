const express = require("express");
const Candidate = require("../../Models/Candidate");

const FilterCandidates = async (req, res, next) => {
    console.log("running now");

    const { filter_value } = req.body;
    const BSCandidates = await Candidate.find();

    if (filter_value == "MALE") {
        const result = BSCandidates.filter((level) => level.gender == "Male");
        return res.status(200).json(result);
    } else if (filter_value == "FEMALE") {
        const result = BSCandidates.filter((level) => level.gender == "Female");
        return res.status(200).json(result);
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ->      FILTER ON YEARS OF EXPERIENCE
    //      **there is some issue with experience resolve it back
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    if (filter_value === "Experience" || filter_value.startsWith("Experience")) {
        //1st Trim the req.body value because i will be sending input in this format Experience:1
        const str = filter_value;
        const value = str.split(":")[1].trim();
        //Now checking that city_value in DB
        console.log('I AM RUNNING');
        console.log(filter_value);
        console.log(value);
        if (value == 0) {
            const result = BSCandidates.filter((level) => level.duration <= 1);
            return res.status(200).json(result);
        } else if (value == 25) {
            const result = BSCandidates.filter(
                (level) => level.duration >= 1 && level.duration <= 3
            );
            return res.status(200).json(result);
        } else if (value == 50) {
            const result = BSCandidates.filter(
                (level) => level.duration >= 3 && level.duration <= 5
            );
            return res.status(200).json(result);
        } else if (value == 75) {
            const result = BSCandidates.filter(
                (level) => level.duration >= 5 && level.duration <= 8
            );
            return res.status(200).json(result);
        } else if (value == 100) {
            const result = BSCandidates.filter((level) => level.duration >= 8);
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "No user from this city exsist" });
        }
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ->      FILTER ON BASIS OF CITY NAME
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    if (filter_value === "City" || filter_value.startsWith("City")) {
        //1st Trim the req.body value because i will be sending input in this format City : city_name
        const str = filter_value;
        const value = str.split(":")[1].trim();
        //Now checking that city_value in DB
        const result = BSCandidates.filter((level) => level.city == value);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "No user from this city exsist" });
        }
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ->     FILTER ON BASIS OF EDUCATIONAL QUALIFICATION
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    else if (filter_value == "BS") {
        const result = BSCandidates.filter((level) => level.level.length == 1);

        return res.status(200).json(result);
    } else if (filter_value == "MS") {
        const result = BSCandidates.filter((level) => level.level.length == 2);

        return res.status(200).json(result);
    } else if (filter_value == "PHD") {
        const result = BSCandidates.filter((level) => level.level.length == 3);

        return res.status(200).json(result);
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    else {
        return res.status(404).json({ message: "No candidate found" });
    }
};

module.exports = FilterCandidates;

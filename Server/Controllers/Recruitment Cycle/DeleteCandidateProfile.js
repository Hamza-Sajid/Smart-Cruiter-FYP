const express = require('express');
const Candidate = require('../../Models/Candidate');

const DeleteCandidateProfile = async (req, res, next) => {

    const { id } = req.body;

    console.log(id);
    try {
        const candidate = await Candidate.findByIdAndDelete({ _id: id });
        console.log(candidate);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        await Candidate.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: 'Candidate deleted successfully' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Server error' });
    }
};

// const { id } = req.body;
// console.log(id);
// const findUser = await Candidate.findByIdAndRemove(id);

// if (findUser) {
//     try {
//         findUser.save();

//     } catch (error) {
//         return res.status(500).json({ message: "Server Error" })
//     }

//     return res.status(200).json({ message: "User delete successfully" })
// }
// else {
//     return res.status(404).json({ message: "No user found" })
// }




module.exports = DeleteCandidateProfile;
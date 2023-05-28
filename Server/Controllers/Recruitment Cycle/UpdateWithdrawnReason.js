const express = require('express');
const Candidate = require('../../Models/Candidate');

const app = express();
const UpdateWithdrawnReason = async (req, res, next) => {

    const { id, description } = req.body;
    Candidate.findByIdAndUpdate(id, { withdrawn_reason: description }, { new: true })
        .then(updatedItem => {
            if (updatedItem) {
                return res.status(200).json({ message: ('Updated') });
            } else {
                return res.status(404).json({ message: ('Invalid ID') });
            }
        })
        .catch(error => {
            return res.status(404).json({ message: ('Something went wrong') });
        });

}

module.exports = UpdateWithdrawnReason;
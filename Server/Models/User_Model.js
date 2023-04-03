const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    f_name: {
        type: String,
        required: [true, "First name is must"]
    },

    username: {
        type: String,
        required: [true, "Last name is must"],
        unique: true
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },

    company_name: {
        type: String,
        required: [true, 'Company name is must']
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },
    isVerified: {
        type: Boolean, default: false
    },
    passwordResetToken: {
        type: String,
    },
    org_registered: {
        type: Boolean, default: false
    },
    org_id: {
        type: String, default: '0'
    }
    // passwordResetExpires: {
    //     type: Date,
    // }

})


const userModel = mongo.model('user', userSchema)

module.exports = userModel;
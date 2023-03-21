const express = require('express');
const forget_password = require('../Controllers/UserController/ForgetPassword.js');
const login = require('../Controllers/UserController/Login.js');
const register = require('../Controllers/UserController/Register.js');
const updatePassword = require('../Controllers/UserController/UpdatePassword.js');
const verifyForgetPwd = require('../Controllers/UserController/verifyForgetpwd.js');
const VerifyMail = require('../Controllers/UserController/VerifyMail.js');

const UserRouter = express.Router();



//Login Route
UserRouter.post("/login", login);




// -> Register

UserRouter.post("/register", register)

// -> Verify Email

UserRouter.get("/verify", VerifyMail)


// -> Forget Password
UserRouter.post("/forget-password", forget_password)

// -> Verify Forget Password by verifying token
UserRouter.post("/verify-forget-pwd", verifyForgetPwd)

//-> Making a new password
UserRouter.post("/new-password", updatePassword)

module.exports = UserRouter;
const express = require('express')
const app = express();
const nodemailer = require('nodemailer');



const SendInterviewEmail = async (req, res, next) => {

    // const { to, subject, body } = req.body;

    const { discription } = req.body;
    const { emailDetails } = req.body
    const { to } = emailDetails;
    const { subject } = emailDetails;


    if (!to || !subject || !discription) {
        return res.status(206).json({ message: "Complete all required fields" })
    }



    const sendMail = async () => {

        const htmlCode = `
        <!DOCTYPE html>
<html>
<head>

</head>
<body>
  <div style="  background:'black' ">
<h1 id="welcome"
    style=" 
           font-family: Impact, sans-serif;
color: #2596be;"
    >Interview Invitation</h1>    
  </div>
  <hr/>


  <div>
  ${discription
            }
  </div>
  
  
  <br/>
  <hr>
  <h4>
    Powered By : Smart-Cruiter
  </h4>
</body>
</html>
        
        `
        try {

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.MAILUSER,
                    pass: process.env.MAILPASS,
                },
            });

            const mailOptions = {
                from: process.env.MAILUSER,
                to: to,
                subject: subject,
                html: htmlCode,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {

                    return res.status(500).json({ message: "Something went wrong" })
                } else {
                    return res.status(200).json({ message: "email sent succesfully" })

                }
            });

        } catch (error) {
            return res.status(500).json({ message: "Something went wrong" })
        }
    }

    sendMail();


}

module.exports = SendInterviewEmail;
const express = require('express');
const Job = require('../../Models/JobModel');
const app = express();
const nodemailer = require("nodemailer");

const SentDeclinedEmail = async (req, res, next) => {

    var org_name, job_title;

    const { email_to } = req.body;
    const { jobInfo } = req.body;


    // ************************

    //     STEP : 1 FIND JOB

    //         ************************
    const id = jobInfo.job_id;

    if (jobInfo == null) {
        res.status(404).json({ message: "ID isn't found in this request" })
    }
    const findJob = await Job.findById(id);

    if (findJob) {
        org_name = findJob.org_name,
            job_title = findJob.jobPosition
    }
    else {
        res.status(404).json({ message: "No job found with this ID" })
    }

    // *********************************

    // STEP : 2 GET ALL EMAIL - LIST , Email Body and Subject

    //          AND SENT EMAIL

    // *********************************

    const { emailTitle, description } = req.body;

    const SendHireMail = async () => {

        const htmlCode = `    
        <!DOCTYPE html>
<html lang="en" style="padding: '0px'; margin: '0px';">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  
  <body style="padding: '0px'; margin: '0px';">
    <main style="padding: '0px'; display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; margin: auto; background: #DEDDDE;">
      <div class="msg" style="margin: '0px'; background: white; border-radius: 10px; padding: 1em; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; height: auto; width: 80vw;">
        <p style="padding: '0px'; margin: '0px';">
       ${description}
        </p>
      </div>
    </main>
    <footer class="" style="padding: '0px'; margin: '0px'; color: rgb(54, 124, 223); font-size: 1.5em; font-weight: bold; text-align: center; text-decoration: underline;">Powered By: Smart Cruiter</footer>
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
                to: [email_to],
                subject: emailTitle,
                html: htmlCode,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    // console.log(error);
                    return res.status(500).json({ message: "An error occured" })
                } else {
                    return res.status(200).json({ message: "Email Sent" })
                    // console.log(`Email sent: ${info.response}`);
                }
            });

        } catch (error) {
            return res.status(500).json({ message: "Something goes unexpected , please try again" })
            // console.log("Error -> " + error);
        }
    }


    SendHireMail();

}

module.exports = SentDeclinedEmail;
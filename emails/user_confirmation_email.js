const express=require('express'); //this import express to this page
const app =express(); // this call the express methods c
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
module.exports = {

    confirmation_email_func: async (user_email,token)=> {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        //let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          auth: {
            user: "mwarabudanny@gmail.com",
            pass: "lubumbashi"
          },
        });
      
        let info = await transporter.sendMail({
          from: '"SapienIO 👻" <foo@example.com>', // sender address
          to: user_email, //user_email, // list of receivers
          subject: "Email Confirmation", // Subject line
          text: "Read bellow", // plain text body
          html: `<div style='width:80%; border:5px solid #B32018;margin-left:auto; margin-right:auto; padding: 15px; margin-bottom: 20px;  border-radius: 4px;background:white'>
                 <a href='#'>
                 <img src='https://lh3.googleusercontent.com/-iWofn7zv1SE/W9HGQ0oWXCI/AAAAAAAAAEk/X8d9kmoVZGggJB_Ood1Pmq2LI-zYTy-LwCEwYBhgLKtMDAL1Ocqzto-aLztMH6pcP6SyrBdQUVVkgribh6IOAl-1_uyaeokuqrQZGPmaGHABwSL-TR0rv23TqdANq15tCRNu4vvSDSAAwYzfwyw0PJMZQvUPb3U5Rg9_rTZNhC8LI4gWT6vwyIRb1pxGA-snFKIRsV6zdZ2HOuhBo5cbBJ57heXoldUrOZbusbsaPkLrz3n0b-2HSfYGYEz56YAR6miF8lpmav5JyR0X4xszwVOflloYV6FNRM-iLycaoGIFE6zDUjVpT8-Dc5A4LeGuK_Tu_6MeK_T8jcUp-vXUlyNFHw5o4LO7Wk7T8yHhdoJXV2fLugzdJAeh8LPV6m6VU_bsBDoGE_7DZhgKW8AwsXAfQHrEVlm4-QXEfZt5392QKPMjXWloHNuEaJIIrA2iQr2Bpz-Anp0VtmKoOnw_l2NSSNll-QW_SxBTkolkZhKyK1ZueYarV36qvO5xO2f4J2k9I1NjHARtL8i3lnzdic0wlvK7hcIqJq4xMOkWMh0sJ0-9mViLeJN4KYxj6KhKgS_jqYm96Jc5793MNpUiaUCKPI3URJpA0Y_ehqOWsSq69wHYOFs9niS5lIfZdpCpf4GSX2XKuVq0-rkbxN-uVLNvNqLAwxuCk9wU/w140-h140-p/DFGHJKJHGC.png'/>
                 </a>
                 <div style='font-family: Arial; border-color: #bce8f1;'>
                 <div style='vertical-align:middle; text-align:center;'>
                 <h2>
                 Dear User you have been Assign to our System
                 </h2>
                 <p style='color:#A9A9A9; text-align:left;' >
                 Congratulations!
                </p>
                <p style='color:#A9A9A9;'>
                 You are in. You can click on this link to activate <a style='text-decoration: none;' href='http://localhost:3000/api/user/confirmation/${token}'> 111 Click here</a>. 
                </p>
                <a style='text-decoration: none; color: #337ab7;' href='{1}'>         
                <p>
                    Prove that you can click like a pro!
                </p>
                </a>
                <p style='font-size:0.8em; color:#A9A9A9; text-decoration:none;'>
                <a style='text-decoration:none;' href='#'>example.com</a> is a question and answer site for students, academia and professionals to get recognized for sharing their valuable knowledge.
                </p>
                <a style='font-size:0.8em; color:#A9A9A9; text-decoration:none;' href='#'>
                <p>
                  Did this email confused you?
                 </p>
               </a>
                <hr/>
                <table style="background:#B32018; width: 100%;">
                <tbody>
                    <tr>
                        <td style="text-align:center;"><a moz-do-not-send="true" style="text-decoration:none; color:white;" href="http://www.hazzardmoving.com" title="Web: www.hazzardmoving.com"><img
                      src="http://i.stack.imgur.com/k55SU.png"/></a> 
                        </td>
                        <td style="text-align:center;"><a moz-do-not-send="true" style="text-decoration:none; color:white;" href="mailto:patrickhazzard@hazzardmoving.com" title="Email: patrickhazzard@hazzardmoving.com"><img
                      src="http://i.stack.imgur.com/i6A3g.png"/></a> 
                        </td>
                        <td style="text-align:center;"> <a moz-do-not-send="true" style="text-decoration:none; color:white;" href="tel:8007831989" title="Phone: +1 (800) 783-1989"><img
                      src="http://i.stack.imgur.com/Pmjgu.png"/></a> 
                        </td>
                    </tr>
                </tbody>
            </table>
              </div>
               </div>`
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}}
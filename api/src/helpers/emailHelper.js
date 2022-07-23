import nodemailer from "nodemailer";

// const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (emailInfo) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: +process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(emailInfo);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendAdminUserVerificationMail = (userObj) => {
  const link = `${process.env.DOMAIN}/admin-verification?e=${userObj.email}&c=${userObj.verificationCode}`;

  const emailInfo = {
    from: '"ABC store" ' + process.env.MAIL_USER, // sender address
    to: userObj.email, // list of receivers
    subject: "Account verification required", // Subject line
    text: `Hi ${userObj.fName} please follow the link to activate your admin account. ${link}`, // plain text body
    html: `
    <p>Hello ${userObj.fName}</p>
    <br/>
    <br/>
    <p>Please follow the link below to verify and activate your admin account</p>
    <br/>
    <br/>
    <a href = "${link}">${link}</a>


    <br/>
    <br/>

    <p>
    ---------------

    <br/>
    xyz ecommerce
    </p>
    
    
    `, // html body
  };

  sendMail(emailInfo);
};

export const profileUpdateNotification = (userObj) => {
  const emailInfo = {
    from: '"ABC store" ' + process.env.MAIL_USER, // sender address
    to: userObj.email, // list of receivers
    subject: "Your profile has been updated", // Subject line
    text: `Hi ${userObj.fName} we have just noticed that your profile has been updated. If this wasn't you, please contact us immediately`, // plain text body
    html: `
    <p>Hello ${userObj.fName}</p>
    <br/>
    <br/>
    <p>We have just noticed that your profile has been updated. If this wasn't you, please contact us immediately</p>
    <br/>
    <br/>


    <br/>
    <br/>

    <p>
    ---------------

    <br/>
    xyz ecommerce
    </p>
    
    
    `, // html body
  };

  sendMail(emailInfo);
};

export const emailPasswordResetOTP = (obj) => {
  console.log(obj);
  const emailInfo = {
    from: '"ABC store" ' + process.env.MAIL_USER, // sender address
    to: obj.email, // list of receivers
    subject: "OTP for password reset", // Subject line
    text: `Hi ${obj.fName} Please use the following OTP to reset your password: ${obj.otp}`, // plain text body
    html: `
    <p>Hello ${obj.fName}</p>
    <br/>
    <br/>
    <p>Please use the following OTP to reset your password: </p>
    <br/>
    <br/>
    <span style="color:red; font-size: 2rem; font-weight: bolder;">${obj.otp}</span>
    <br/>
    <br/>

    <p>
    ---------------

    <br/>
    ABC store
    </p>
    
    
    `, // html body
  };

  sendMail(emailInfo);
};

const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stalliapp0@gmail.com', // Replace with your Gmail email address
        pass: 'ehflmmcsciqsifhb', // Replaace with your Gmail email password
    },
});

// Function to send verification link to email
async function sendOtpToResetPassword(email, otp) {
    const mailOptions = {
        from: 'stalliapp0@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: "Your OTP for verification is reset "
    };
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
}

// Function to send verification link to email
async function sendEmailPassword(email, subject, html, password) {
    console.log(email, subject, html, password)
    const mailOptions = {
        from: 'stalliapp0@gmail.com',
        to: email,
        subject: subject,
        html,
        password
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
    } catch (error) {
        console.error("Error sending email", error);
    }
}

async function sendEmailAtReject(email, subject, html) {
    console.log(email, subject, html)
    const mailOptions = {
        from: 'stalliapp0@gmail.com',
        to: email,
        subject: subject,
        html

    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
    } catch (error) {
        console.error("Error sending email", error);
    }
}

async function sendEmailToDEO( subject, html) {
    console.log( subject, html)
    const mailOptions = {
        from: 'stalliapp0@gmail.com',
        to: 'affaqkhan211@gmail.com',
        subject: subject,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
    } catch (error) {
        console.error("Error sending email", error);
    }
}


module.exports = {
    sendOtpToResetPassword,
    sendEmailPassword,
    sendEmailToDEO,
    sendEmailAtReject
};
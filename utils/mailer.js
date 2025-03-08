// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const sendEmail = async (name, email, message) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 465,
//             secure: true, // Use SSL
//             auth: {
//                 user: process.env.EMAIL_USER, // Fetch from .env
//                 pass: process.env.EMAIL_PASS, // Fetch from .env
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_RECEIVER,
//             subject: "New Contact Form Submission",
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         };

//         await transporter.sendMail(mailOptions);
//         return { success: true, message: "Email sent successfully" };
//     } catch (error) {
//         console.error("Email send error:", error);
//         return { success: false, message: "Failed to send email", error };
//     }
// };

// module.exports = sendEmail;


require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (name, email, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Make sure these variables are loaded
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("📨 Email send error:", error);
        return { success: false, message: "Failed to send email", error };
    }
};

module.exports = sendEmail;




import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
    console.log("Route hit!");
    console.log(req.body);

    const { name, surname, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `New message from ${name} ${surname}`,
            text: `
                Name: ${name} ${surname}
                Email: ${email}
                Message: 
                ${message}
                `,
        };

        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ success: true });
    }   catch (err) {
        console.error("Email error:", err);
        res.status(500).json({ success: false });
    }
});

export default router;
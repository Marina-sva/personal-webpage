const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email ) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Message',
      html: `
        <h3>New message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email not sent' });
  }
});

// start server
app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});

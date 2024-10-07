// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5400;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to receive contact form data
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail
    auth: {
      user: process.env.EMAIL, // Your Gmail address
      pass: process.env.EMAIL_PASSWORD, // Your Gmail app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL, // The sender's email address (from the form)
    to: process.env.SENDEMAIL, // Your email to receive the alert
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

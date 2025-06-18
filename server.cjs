// Express.js server for handling SMTP email sending
// This server should be run separately from the React frontend

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration for Hostinger
const SMTP_CONFIG = {
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'info@raahirides.com',
    pass: process.env.SMTP_PASSWORD // Set this in your .env file
  }
};

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport(SMTP_CONFIG);

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

// API endpoint to send booking notification emails
app.post('/api/send-booking-email', async (req, res) => {
  try {
    const { bookingData } = req.body;
    
    if (!bookingData) {
      return res.status(400).json({ 
        success: false, 
        error: 'Booking data is required' 
      });
    }

    // Format email content
    const emailContent = formatBookingEmail(bookingData);
    
    // Send email
    const result = await transporter.sendMail(emailContent);
    
    console.log('Email sent successfully:', result.messageId);
    
    res.json({ 
      success: true, 
      messageId: result.messageId,
      message: 'Booking notification sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Raahi Rides Email Service is running',
    timestamp: new Date().toISOString()
  });
});

// Format booking data into email content
function formatBookingEmail(bookingData) {
  const {
    name,
    email,
    phone,
    fromDestination,
    toDestination,
    packageTour,
    carType,
    date,
    returnDate,
    tripType,
    specialNeeds,
    destination,
    bookingId,
    bookingDate
  } = bookingData;

  const isPackageTour = packageTour && packageTour !== '';
  const isCustomTour = destination === "Custom Tour";

  let subject = '';
  let bodyContent = '';

  if (isPackageTour) {
    subject = `New Package Tour Booking - ${packageTour}`;
    bodyContent = `
      <h2 style="color: #ea580c;">New Package Tour Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ea580c; margin-top: 0;">Package Details:</h3>
        <p><strong>Package:</strong> ${packageTour}</p>
        <p><strong>Pickup City:</strong> ${fromDestination}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
      </div>
    `;
  } else if (isCustomTour) {
    subject = `New Custom Journey Booking - ${fromDestination} to ${toDestination}`;
    bodyContent = `
      <h2 style="color: #ea580c;">New Custom Journey Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ea580c; margin-top: 0;">Journey Details:</h3>
        <p><strong>From:</strong> ${fromDestination}</p>
        <p><strong>To:</strong> ${toDestination}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        ${returnDate ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
      </div>
    `;
  } else {
    subject = `New Booking - ${destination || `${fromDestination} to ${toDestination}`}`;
    bodyContent = `
      <h2 style="color: #ea580c;">New Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ea580c; margin-top: 0;">Trip Details:</h3>
        <p><strong>Destination:</strong> ${destination || `${fromDestination} to ${toDestination}`}</p>
        <p><strong>From:</strong> ${fromDestination}</p>
        <p><strong>To:</strong> ${toDestination}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        ${returnDate ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
      </div>
    `;
  }

  const fullEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #ea580c; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Raahi Rides</h1>
        <p style="margin: 10px 0 0 0;">New Booking Notification</p>
      </div>
      
      ${bodyContent}
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Customer Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      </div>
      
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Additional Information:</h3>
        <p><strong>Special Needs/Comments:</strong> ${specialNeeds || 'None'}</p>
        <p><strong>Booking ID:</strong> <span style="font-family: monospace; background-color: #e5e7eb; padding: 2px 6px; border-radius: 4px;">${bookingId}</span></p>
        <p><strong>Booking Time:</strong> ${new Date(bookingDate).toLocaleString()}</p>
      </div>
      
      <div style="border-top: 2px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280;">
        <p><em>This booking was submitted through the Raahi Rides website.</em></p>
        <p style="margin: 0;">Please contact the customer to confirm the booking details.</p>
      </div>
    </div>
  `;

  return {
    from: '"Raahi Rides" <info@raahirides.com>',
    to: 'info@raahirides.com',
    subject: subject,
    html: fullEmailContent,
    replyTo: email
  };
}

// Start server
app.listen(PORT, () => {
  console.log(`Raahi Rides Email Service running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
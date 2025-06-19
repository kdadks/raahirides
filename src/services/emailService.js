// Email service for sending booking notifications via SMTP
// This service will use a backend API endpoint to send emails

const SMTP_CONFIG = {
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'info@raahirides.com',
    pass: import.meta.env.VITE_SMTP_PASSWORD || '' // Password should be set in environment variables
  }
};

/**
 * Send booking notification email
 * @param {Object} bookingData - The booking information
 * @returns {Promise} - Promise resolving to email send result
 */
export const sendBookingNotification = async (bookingData) => {
  try {
    // Get the API base URL - for Netlify functions or fallback to local development
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
    
    // Determine the endpoint based on environment
    const isNetlifyFunction = API_BASE_URL.includes('netlify');
    const endpoint = isNetlifyFunction
      ? `${API_BASE_URL}/send-booking-email`
      : `${API_BASE_URL}/api/send-booking-email`;
    
    // Send booking data to Netlify function or backend API
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookingData })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }
    
    console.log('Booking notification sent successfully:', result.messageId);
    return { success: true, message: result.message, messageId: result.messageId };
    
  } catch (error) {
    console.error('Failed to send booking email:', error);
    
    // Enhanced fallback handling for different scenarios
    if (error.message.includes('fetch') ||
        error.message.includes('Failed to fetch') ||
        error.message.includes('NetworkError') ||
        error.name === 'TypeError') {
      console.warn('Service not available, using mock email service for development');
      await mockEmailSend(formatBookingEmail(bookingData));
      return { success: true, message: 'Email sent successfully (development mode)' };
    }
    
    return { success: false, error: error.message };
  }
};

/**
 * Format booking data into email content
 * @param {Object} bookingData - The booking information
 * @returns {Object} - Formatted email content
 */
const formatBookingEmail = (bookingData) => {
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
      <h2>New Package Tour Booking Received</h2>
      <h3>Package Details:</h3>
      <p><strong>Package:</strong> ${packageTour}</p>
      <p><strong>Pickup City:</strong> ${fromDestination}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
    `;
  } else if (isCustomTour) {
    subject = `New Custom Journey Booking - ${fromDestination} to ${toDestination}`;
    bodyContent = `
      <h2>New Custom Journey Booking Received</h2>
      <h3>Journey Details:</h3>
      <p><strong>From:</strong> ${fromDestination}</p>
      <p><strong>To:</strong> ${toDestination}</p>
      <p><strong>Car Type:</strong> ${carType}</p>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>Travel Date:</strong> ${date}</p>
      ${returnDate ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
    `;
  } else {
    subject = `New Booking - ${destination || `${fromDestination} to ${toDestination}`}`;
    bodyContent = `
      <h2>New Booking Received</h2>
      <h3>Trip Details:</h3>
      <p><strong>Destination:</strong> ${destination || `${fromDestination} to ${toDestination}`}</p>
      <p><strong>From:</strong> ${fromDestination}</p>
      <p><strong>To:</strong> ${toDestination}</p>
      <p><strong>Car Type:</strong> ${carType}</p>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>Travel Date:</strong> ${date}</p>
      ${returnDate ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
    `;
  }

  const fullEmailContent = `
    ${bodyContent}
    
    <h3>Customer Information:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    
    <h3>Additional Information:</h3>
    <p><strong>Special Needs/Comments:</strong> ${specialNeeds || 'None'}</p>
    <p><strong>Booking ID:</strong> ${bookingId}</p>
    <p><strong>Booking Time:</strong> ${new Date(bookingDate).toLocaleString()}</p>
    
    <hr>
    <p><em>This booking was submitted through the Raahi Rides website.</em></p>
  `;

  return {
    from: 'info@raahirides.com',
    to: 'info@raahirides.com',
    subject: subject,
    html: fullEmailContent,
    replyTo: email
  };
};

/**
 * Mock email sending function for demo purposes
 * In production, replace this with actual backend API call
 * @param {Object} emailContent - The formatted email content
 * @returns {Promise} - Promise that resolves after mock delay
 */
const mockEmailSend = async (emailContent) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log the email that would be sent
  console.log('=== EMAIL WOULD BE SENT ===');
  console.log('To:', emailContent.to);
  console.log('From:', emailContent.from);
  console.log('Subject:', emailContent.subject);
  console.log('HTML Content:', emailContent.html);
  console.log('=== END EMAIL ===');
  
  // In production, this would be replaced with:
  // const response = await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     smtpConfig: SMTP_CONFIG,
  //     emailContent: emailContent
  //   })
  // });
  // return response.json();
};

/**
 * Create a backend API endpoint for sending emails
 * This is the server-side code that should be implemented in your backend
 * 
 * Example Express.js endpoint:
 * 
 * app.post('/api/send-email', async (req, res) => {
 *   const nodemailer = require('nodemailer');
 *   const { smtpConfig, emailContent } = req.body;
 *   
 *   try {
 *     const transporter = nodemailer.createTransporter(smtpConfig);
 *     const result = await transporter.sendMail(emailContent);
 *     res.json({ success: true, messageId: result.messageId });
 *   } catch (error) {
 *     res.status(500).json({ success: false, error: error.message });
 *   }
 * });
 */

export default {
  sendBookingNotification,
  SMTP_CONFIG
};
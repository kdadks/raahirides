const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'OK' })
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { bookingData } = JSON.parse(event.body);

    if (!bookingData) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Booking data is required' })
      };
    }

    // SMTP Configuration
    const smtpConfig = {
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@raahirides.com',
        pass: process.env.SMTP_PASSWORD
      }
    };

    // Validate required environment variables
    if (!process.env.SMTP_PASSWORD) {
      console.error('SMTP_PASSWORD environment variable is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Email service configuration error' })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransporter(smtpConfig);

    // Format email content
    const emailContent = formatBookingEmail(bookingData);

    // Send email
    const result = await transporter.sendMail(emailContent);

    console.log('Email sent successfully:', result.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Booking notification sent successfully',
        messageId: result.messageId
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to send booking notification',
        details: error.message
      })
    };
  }
};

/**
 * Format booking data into email content
 */
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
      <h2 style="color: #ea580c; margin-bottom: 20px;">New Package Tour Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #9a3412; margin-bottom: 15px;">Package Details:</h3>
        <p><strong>Package:</strong> ${packageTour}</p>
        <p><strong>Pickup City:</strong> ${fromDestination}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
      </div>
    `;
  } else if (isCustomTour) {
    subject = `New Custom Journey Booking - ${fromDestination} to ${toDestination}`;
    bodyContent = `
      <h2 style="color: #ea580c; margin-bottom: 20px;">New Custom Journey Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #9a3412; margin-bottom: 15px;">Journey Details:</h3>
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
      <h2 style="color: #ea580c; margin-bottom: 20px;">New Booking Received</h2>
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #9a3412; margin-bottom: 15px;">Trip Details:</h3>
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
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #ea580c, #f97316); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Raahi Rides</h1>
        <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">New Booking Notification</p>
      </div>
      
      <div style="padding: 30px;">
        ${bodyContent}
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #9a3412; margin-bottom: 15px;">Customer Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ea580c;">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #ea580c;">${phone}</a></p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #9a3412; margin-bottom: 15px;">Additional Information:</h3>
          <p><strong>Special Needs/Comments:</strong> ${specialNeeds || 'None'}</p>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Booking Time:</strong> ${new Date(bookingDate).toLocaleString()}</p>
        </div>
        
        <div style="border-top: 2px solid #fed7aa; padding-top: 20px; text-align: center;">
          <p style="color: #9a3412; font-style: italic; margin: 0;">
            This booking was submitted through the Raahi Rides website.
          </p>
          <p style="color: #9a3412; margin: 10px 0 0 0; font-size: 14px;">
            Please contact the customer within 24 hours to confirm the booking.
          </p>
        </div>
      </div>
    </div>
  `;

  return {
    from: 'info@raahirides.com',
    to: 'info@raahirides.com',
    subject: subject,
    html: fullEmailContent,
    replyTo: email
  };
}
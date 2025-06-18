// Test script to verify SMTP connection
// Run with: node test-smtp.js

const nodemailer = require('nodemailer');
require('dotenv').config();

// SMTP Configuration for Hostinger
const SMTP_CONFIG = {
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@raahirides.com',
    pass: process.env.SMTP_PASSWORD
  }
};

async function testSMTPConnection() {
  console.log('🔧 Testing SMTP connection...');
  console.log('Host:', SMTP_CONFIG.host);
  console.log('Port:', SMTP_CONFIG.port);
  console.log('User:', SMTP_CONFIG.auth.user);
  console.log('Password:', process.env.SMTP_PASSWORD ? '✅ Set' : '❌ Not set');
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);
    
    // Verify connection
    console.log('\n📡 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    console.log('\n📧 Sending test email...');
    const testEmail = {
      from: '"Raahi Rides Test" <info@raahirides.com>',
      to: 'info@raahirides.com',
      subject: 'SMTP Test - Raahi Rides Booking System',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #ea580c; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Raahi Rides</h1>
            <p style="margin: 10px 0 0 0;">SMTP Test Email</p>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #ea580c;">SMTP Configuration Test</h2>
            <p>This is a test email to verify that the SMTP configuration is working correctly.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Configuration Details:</h3>
              <p><strong>Host:</strong> ${SMTP_CONFIG.host}</p>
              <p><strong>Port:</strong> ${SMTP_CONFIG.port}</p>
              <p><strong>Security:</strong> SSL/TLS</p>
              <p><strong>From:</strong> ${SMTP_CONFIG.auth.user}</p>
              <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p>If you receive this email, the SMTP setup is working correctly and booking notifications will be sent successfully.</p>
            
            <div style="border-top: 2px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280;">
              <p><em>This is an automated test email from Raahi Rides booking system.</em></p>
            </div>
          </div>
        </div>
      `
    };
    
    const result = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    
    console.log('\n🎉 SMTP setup is working correctly!');
    console.log('All booking notifications will now be sent to info@raahirides.com');
    
  } catch (error) {
    console.error('\n❌ SMTP test failed:');
    console.error('Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('   - SMTP_PASSWORD in .env file');
      console.error('   - Email account credentials');
      console.error('   - Account security settings');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Please check:');
      console.error('   - Internet connection');
      console.error('   - Firewall settings (port 465)');
      console.error('   - SMTP server hostname');
    }
  }
}

// Check if SMTP password is provided
if (!process.env.SMTP_PASSWORD) {
  console.error('❌ SMTP_PASSWORD not found in environment variables');
  console.error('Please create a .env file with SMTP_PASSWORD=your_email_password');
  process.exit(1);
}

// Run the test
testSMTPConnection();
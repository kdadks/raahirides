# SMTP Email Setup for Raahi Rides

This document explains how to set up the SMTP email service for Raahi Rides booking notifications using Hostinger's SMTP configuration.

## SMTP Configuration

- **Hostname:** smtp.hostinger.com
- **Port:** 465 (SSL/TLS)
- **Email:** info@raahirides.com
- **Security:** SSL/TLS enabled

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# SMTP Configuration for Hostinger
SMTP_PASSWORD=your_actual_email_password

# Server Configuration
PORT=3001

# Frontend Configuration (for Vite)
VITE_API_BASE_URL=http://localhost:3001
```

**Important:** Replace `your_actual_email_password` with the actual password for info@raahirides.com

### 2. Install Backend Dependencies

Install the required packages for the email service:

```bash
# Install backend dependencies
npm install express nodemailer cors dotenv

# Optional: Install nodemon for development
npm install --save-dev nodemon
```

### 3. Start the Email Service

Run the backend email service:

```bash
# Start the email service
node server.cjs

# Or for development with auto-reload
npx nodemon server.cjs
```

The service will start on port 3001 by default.

### 4. Start the Frontend

In a separate terminal, start the React frontend:

```bash
npm run dev
```

## How It Works

### Booking Flow

1. User clicks any "Book Now" button in the application
2. BookingModal component opens with the appropriate form
3. User fills out booking details and submits
4. Frontend calls the email service API at `/api/send-booking-email`
5. Backend formats the booking data into a professional email
6. Email is sent via SMTP to info@raahirides.com
7. User receives confirmation of successful booking

### "Book Now" Button Locations

The following components have "Book Now" buttons that are now connected to SMTP:

1. **Hero Section** - "Start Your Journey" button
   - Opens custom tour booking modal
   - Allows selection between package tours or point-to-point journeys

2. **Package Tour Cards** - "Book This Package" buttons
   - Pre-fills the package tour in the booking modal
   - Requires pickup city and preferred date

3. **Destination Cards** - "Book Now" buttons
   - Opens point-to-point booking modal
   - Requires full journey details

### Email Templates

The system generates different email templates based on booking type:

- **Package Tour Bookings:** Highlights the selected package and pickup details
- **Custom Journey Bookings:** Shows full point-to-point travel details
- **Destination Bookings:** Displays complete trip information

All emails include:
- Customer contact information
- Booking ID for reference
- Special needs/comments
- Professional HTML formatting with Raahi Rides branding

## API Endpoints

### POST `/api/send-booking-email`

Sends a booking notification email.

**Request Body:**
```json
{
  "bookingData": {
    "name": "Customer Name",
    "email": "customer@example.com",
    "phone": "+1234567890",
    "fromDestination": "Gorakhpur",
    "toDestination": "Varanasi",
    "packageTour": "Spiritual Journey",
    "carType": "Sedan",
    "date": "2024-01-15",
    "returnDate": "2024-01-16",
    "tripType": "round-trip",
    "specialNeeds": "Airport pickup required",
    "destination": "Custom Tour",
    "bookingId": "RR1234567890",
    "bookingDate": "2024-01-01T10:00:00.000Z"
  }
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "email-message-id",
  "message": "Booking notification sent successfully"
}
```

### GET `/api/health`

Health check endpoint to verify the service is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Raahi Rides Email Service is running",
  "timestamp": "2024-01-01T10:00:00.000Z"
}
```

## Troubleshooting

### Common Issues

1. **Email not sending:**
   - Verify SMTP credentials in `.env` file
   - Check if port 465 is not blocked by firewall
   - Ensure info@raahirides.com credentials are correct

2. **Backend connection failed:**
   - Verify backend server is running on port 3001
   - Check console for any error messages
   - Ensure CORS is properly configured

3. **Frontend not connecting to backend:**
   - Verify `VITE_API_BASE_URL` in `.env` file
   - Check browser network tab for failed requests
   - Ensure both frontend and backend are running

### Development Mode

If the backend is not available, the system will automatically fall back to a mock email service that logs the email content to the console. This allows development to continue even without the full SMTP setup.

## Production Deployment

For production deployment:

1. Set up environment variables on your hosting platform
2. Deploy the backend service (server.js) separately
3. Update `VITE_API_BASE_URL` to point to your production backend
4. Ensure SMTP credentials are properly secured
5. Test email functionality thoroughly before going live

## Security Notes

- Never commit the `.env` file to version control
- Use strong, unique passwords for the email account
- Consider using application-specific passwords if available
- Implement rate limiting for the email API in production
- Monitor email sending for abuse or unusual patterns
# Netlify Deployment Guide for Raahi Rides

This guide will help you deploy the Raahi Rides application to Netlify with automated email functionality.

## Prerequisites

1. A Netlify account (free tier available)
2. A GitHub repository with your code
3. SMTP credentials from Hostinger (info@raahirides.com)

## Deployment Steps

### 1. Initial Setup

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com) and log in
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your RaahiRides repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### 2. Environment Variables

In your Netlify dashboard, go to **Site Settings > Environment Variables** and add:

```
SMTP_PASSWORD=your_actual_smtp_password
VITE_API_BASE_URL=/.netlify/functions
NODE_VERSION=18
```

### 3. Domain Configuration

1. **Custom Domain** (Optional)
   - Go to **Domain Settings**
   - Add your custom domain
   - Configure DNS settings as instructed

2. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - Ensure "Force HTTPS" is enabled

### 4. Function Deployment

The email functionality is automatically deployed as a Netlify Function:
- Function endpoint: `/.netlify/functions/send-booking-email`
- No additional configuration needed

## GitHub Actions (Optional)

The project includes a GitHub Actions workflow that:
- Builds the project on every push to main/master
- Runs Lighthouse performance tests
- Automatically deploys to Netlify

### Required GitHub Secrets

Add these secrets in your GitHub repository (**Settings > Secrets and Variables > Actions**):

```
NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token
NETLIFY_SITE_ID=your_netlify_site_id
VITE_API_BASE_URL=/.netlify/functions
```

To get these values:
1. **NETLIFY_AUTH_TOKEN**: Go to Netlify User Settings > Personal Access Tokens
2. **NETLIFY_SITE_ID**: Found in Site Settings > General > Site Information

## File Structure

```
├── netlify.toml                    # Netlify configuration
├── .github/workflows/
│   └── netlify-deploy.yml         # GitHub Actions workflow
├── netlify/functions/
│   └── send-booking-email.js      # Email function
├── .env.netlify                   # Environment variables template
└── NETLIFY_DEPLOYMENT.md          # This guide
```

## Email Function Features

- **Endpoint**: `/.netlify/functions/send-booking-email`
- **CORS Support**: Handles cross-origin requests
- **Error Handling**: Comprehensive error responses
- **Email Templates**: Professional HTML email formatting
- **Security**: Environment variable protection

## Testing the Deployment

1. **Local Testing**
   ```bash
   npm run build
   npm run preview
   ```

2. **Function Testing**
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run locally: `netlify dev`
   - Test function: `netlify functions:invoke send-booking-email`

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18)
   - Verify all dependencies are in package.json
   - Check build logs for specific errors

2. **Email Function 500 Error (Fixed)**
   - The function now uses CommonJS format (not ES modules)
   - Verify SMTP_PASSWORD environment variable is set in Netlify
   - Check function logs in Netlify dashboard under Functions tab
   - Ensure environment variable has no quotes around it
   - Redeploy site after adding environment variables

3. **Email Function Not Working**
   - Check Netlify function logs: Site Settings > Functions > View function logs
   - Verify SMTP_PASSWORD environment variable exists
   - Test SMTP credentials with the test-smtp.cjs script locally
   - Ensure Hostinger SMTP settings are correct (smtp.hostinger.com:465)

4. **Environment Variables**
   - Don't include quotes around values in Netlify dashboard
   - Redeploy after adding new variables (Functions need redeployment)
   - Check variable names for typos (case-sensitive)
   - Variables should be: SMTP_PASSWORD and VITE_API_BASE_URL

5. **CORS Issues**
   - Function includes proper CORS headers
   - If still getting CORS errors, check browser developer tools
   - Ensure frontend is calling /.netlify/functions/send-booking-email

### Support

For deployment issues:
1. Check Netlify build logs
2. Review function logs in Netlify dashboard
3. Test locally with `netlify dev`

## Production Checklist

- [ ] Repository connected to Netlify
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Email function tested
- [ ] GitHub Actions secrets configured (if using)
- [ ] Performance optimized (check Lighthouse scores)

## Security Notes

- Never commit `.env` files with real credentials
- Use environment variables for all sensitive data
- Enable Netlify's security headers (configured in netlify.toml)
- Regularly update dependencies for security patches

## Performance Optimization

The deployment includes:
- Asset caching (1 year for static assets)
- Gzip compression
- Security headers
- SPA routing support
- Lighthouse CI for performance monitoring
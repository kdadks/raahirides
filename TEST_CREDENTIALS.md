# 🧪 Test Login Credentials for RaahiRides

This document contains the test login credentials for development and testing purposes.

## 📧 Available Test Accounts

### 1. Test User
- **Email:** `test@raahirides.com`
- **Password:** `test123`
- **Description:** Basic test user account for general testing

### 2. John Traveler
- **Email:** `john@example.com`
- **Password:** `password123`
- **Description:** Sample traveler account with realistic name

### 3. Admin User
- **Email:** `admin@raahirides.com`
- **Password:** `admin123`
- **Description:** Admin test account for administrative features

## 🚀 How to Use

### Method 1: Development Helper Widget
1. **Look for the 🔧 button** in the bottom-right corner of your screen (development mode only)
2. **Click the 🔧 button** to open the test credentials panel
3. **Choose your preferred method:**
   - **🚀 Quick Login:** Click the orange "Quick Login" button for instant access
   - **📋 Copy Credentials:** Click email/password buttons to copy to clipboard, then paste in login form

### Method 2: Manual Login
1. Navigate to `/login` page
2. Enter any of the email/password combinations listed above
3. Click "Sign In"

### Method 3: Console Access
When you first load the app, test credentials are logged to the browser console:
```
🔧 Development: Test users initialized
📧 Test Login Credentials:
   Email: test@raahirides.com | Password: test123
   Email: john@example.com | Password: password123
   Email: admin@raahirides.com | Password: admin123
```

## 🔧 Technical Implementation

### Auto-Initialization
- Test users are automatically created on first app load
- Stored in browser's localStorage
- Only created if no existing users are found

### Development Only
- Test credentials widget only appears in development mode
- Automatically hidden in production builds
- Uses `process.env.NODE_ENV` check

### Features
- **Quick Login:** One-click authentication
- **Copy to Clipboard:** Easy credential copying
- **Toast Notifications:** Success/error feedback
- **Responsive Design:** Works on all screen sizes

## 🛡️ Security Notes

- These are **development-only** credentials
- Never use these passwords in production
- Test users are stored in localStorage (not secure for production)
- Widget automatically hidden in production builds

## 🚀 Getting Started

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Look for the 🔧 button** in the bottom-right corner

3. **Click it and choose a test user** to quickly login

4. **Explore the member area** with instant access!

## 📝 Notes

- Test users persist between browser sessions
- Clear localStorage to reset test users
- Console logs show when test users are initialized
- All test accounts have the same access level (basic user)

---

**Happy Testing! 🎉**

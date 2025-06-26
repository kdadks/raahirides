# Raahi Rides

A modern travel booking platform specializing in spiritual journeys and cultural heritage tours across Eastern Uttar Pradesh, Bihar, and Nepal.

## 🌟 Overview

Raahi Rides is a comprehensive travel service provider offering exceptional experiences ranging from point-to-point travel solutions to complete package tours. Our platform focuses on showcasing the rich cultural heritage and spiritual significance of Eastern India and Nepal.

## 🎯 Features

### Core Functionality
- **Spiritual Journey Packages**: Curated tours including Moksha Yatra, Avadh Retreat, and Divine Yatra
- **Popular Destinations**: Varanasi, Sarnath, Bodh Gaya, Ayodhya, Lucknow, Gorakhpur, and Prayagraj
- **Interactive Booking System**: Modal-based booking with destination selection
- **User Authentication**: Secure login/signup system with protected routes
- **Member Dashboard**: Personal booking management, travel history, and rewards system
- **WhatsApp Integration**: Quick contact and support via WhatsApp button
- **Responsive Design**: Mobile-first approach with beautiful animations

### User Experience
- **Modern UI/UX**: Built with Radix UI components and Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Toast Notifications**: Real-time feedback for user actions
- **Image Collage**: Dynamic hero section with destination imagery
- **Cultural Focus**: Emphasis on spiritual and heritage tourism

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### UI/UX Libraries
- **Radix UI** - Accessible component primitives
  - Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Label, Navigation Menu, Slider, Slot, Tabs, Toast
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Development Tools
- **TypeScript** - Type safety (dev dependency)
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing
- **Terser** - JavaScript minification

### Additional Features
- **SMTP Email Service** - Direct email notifications via Hostinger SMTP
- **Nodemailer** - Professional email sending capabilities
- **Class Variance Authority** - Component styling utilities
- **Visual Editor Plugin** - Custom development tools

## 📁 Project Structure

```
raahi-rides/
├── public/
│   └── .htaccess              # Apache configuration
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── BookingModal.jsx   # Booking interface (SMTP integrated)
│   │   ├── Destination.jsx    # Destination cards
│   │   ├── Footer.jsx         # Site footer
│   │   ├── ImageCollage.jsx   # Hero image display
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── PackageTour.jsx    # Tour package cards
│   │   ├── ProtectedRoute.jsx # Route protection
│   │   └── WhatsAppButton.jsx # WhatsApp integration
│   ├── services/
│   │   └── emailService.js    # SMTP email service
│   ├── pages/
│   │   ├── About.jsx          # About page
│   │   ├── Login.jsx          # User login
│   │   ├── SignUp.jsx         # User registration
│   │   ├── MyBookings.jsx     # User bookings
│   │   ├── TravelHistory.jsx  # Travel history
│   │   └── Rewards.jsx        # Rewards system
│   ├── contexts/
│   │   └── AuthContext.jsx    # Authentication context
│   ├── constants/
│   │   ├── cities.js          # City data
│   │   └── destinations.js    # Destination & tour data
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── assets/
│   │   └── images/            # Static images
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── plugins/
│   └── visual-editor/         # Custom development plugins
├── server.cjs                 # Express.js SMTP server
├── test-smtp.cjs             # SMTP connection test script
├── package.json               # Frontend dependencies
├── package-server.json        # Backend dependencies
├── .env.example               # Environment variables template
├── SMTP_SETUP.md             # SMTP configuration guide
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version specified in `.nvmrc`)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd raahi-rides
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up SMTP email service**
   ```bash
   # Install backend dependencies
   npm install express nodemailer cors dotenv
   
   # Copy environment template
   cp .env.example .env
   
   # Edit .env file with your actual SMTP password
   # SMTP_PASSWORD=your_actual_email_password
   ```

4. **Start the email service (in separate terminal)**
   ```bash
   node server.cjs
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Preview production build**
   ```bash
   npm run preview
   ```

> **Note:** For detailed SMTP configuration, see [`SMTP_SETUP.md`](SMTP_SETUP.md)

## 🌍 Available Routes

### Public Routes
- `/` - Homepage with hero section, packages, and destinations
- `/about` - About Raahi Rides and company information
- `/login` - User authentication
- `/signup` - User registration

### Protected Routes (Members Area)
- `/members/` - Member dashboard
- `/members/bookings` - View and manage bookings
- `/members/history` - Travel history
- `/members/rewards` - Rewards and loyalty program

## 🎨 Key Features Detail

### Spiritual Journey Packages

1. **Moksha Yatra**
   - Varanasi (Kashi Vishwanath Temple, Ganga Aarti, Sankat Mochan Temple)
   - Sarnath (Dhamek Stupa, Ashoka Pillar, Buddhist Temples)
   - Gaya (Vishnupad Temple, Falgu River, Bodh Gaya)

2. **Avadh Retreat**
   - Ayodhya (Ram Mandir, Sita ki Rasoi, Hanuman Garhi)
   - Prayagraj (Triveni Sangam, Anand Bhavan, Allahabad Fort)
   - Lucknow (Bara Imambara, Rumi Darwaza, Chota Imambara)

3. **Divine Yatra**
   - Gorakhpur (Gorakhnath Temple, Gita Vatika, Railway Museum)
   - Multi-city spiritual journey covering major pilgrimage sites

### Popular Destinations
- **Varanasi** - Spiritual capital with ancient temples and Ganges River
- **Sarnath** - Sacred Buddhist pilgrimage site
- **Bodh Gaya** - Place of Buddha's enlightenment
- **Ayodhya** - Birthplace of Lord Ram
- **Lucknow** - City of Nawabs with rich culture and architecture
- **Gorakhpur** - Home to famous Gorakhnath Temple
- **Prayagraj** - Holy confluence of three sacred rivers

## 🔧 Configuration

### Environment Setup
- Uses `.nvmrc` for Node.js version management
- Vite configuration includes custom plugins and development tools
- Tailwind CSS configured for optimal styling
- Path aliases set up for clean imports (`@/` points to `src/`)

### Build Configuration
- Production builds exclude development plugins
- Rollup configuration for optimal bundling
- Custom error handling for development environment

### SMTP Email Configuration
- **Host:** smtp.hostinger.com (Port 465, SSL/TLS)
- **Email:** info@raahirides.com
- **Backend Service:** Express.js server for email handling
- **Fallback:** Mock email service for development
- See `SMTP_SETUP.md` for detailed configuration instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Raahi Rides.

## 📞 Contact

For support or inquiries, use the WhatsApp button on the website or contact us through the booking modal.

---

**Built with ❤️ for spiritual and cultural tourism in Eastern India and Nepal**

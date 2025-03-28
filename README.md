README - BLUESTOCK FinTech Website
Overview
BLUESTOCK is a comprehensive financial technology platform offering tools and resources for investors, traders, and financial enthusiasts. The platform includes features like IPO tracking, market analysis, broker comparisons, educational resources, and community engagement.

Project Structure
Backend
Copy
backend/
├── config/
│   └── db.js                # Database configuration
├── controllers/
│   └── authController.js     # Authentication logic
├── middleware/
│   └── authMiddleware.js     # Authentication middleware
├── model/
│   ├── index.js              # Model exports
│   ├── QuickLink.js          # QuickLink model
│   └── User.js               # User model
├── node_modules/
├── routes/
│   └── authRoutes.js         # Authentication routes
├── uploads/                  # File uploads directory
├── .env                      # Environment variables
├── package-lock.json
├── package.json
└── server.js                 # Main server file
Frontend
Copy
frontend/
├── public/
│   ├── assets/
│   └── other item uploads/   # Static assets
└── src/
    ├── pages/
    │   ├── About/            # About page components
    │   ├── Admin-View/       # Admin dashboard components
    │   ├── Analatysic/       # Analytics tools
    │   ├── Analysis/         # Market analysis
    │   ├── Authoritiction/   # Authentication pages (Login, SignUp, Forgot)
    │   ├── Blog/             # Financial blog
    │   ├── Broker/           # Broker comparison tools
    │   ├── Carrers/          # Career opportunities
    │   ├── Community/        # Community engagement
    │   ├── Contact/          # Contact forms
    │   ├── Home/             # Homepage components
    │   ├── IPO/              # IPO tracking
    │   ├── MethodFund/       # Fund management tools
    │   ├── Product/          # Product listings
    │   ├── Schools/          # Educational resources
    │   ├── Sector/           # Sector analysis
    │   ├── Sharks/           # Investor profiles
    │   └── TechnicalAnal.../ # Technical analysis tools
    ├── App.css               # Global styles
    ├── App.jsx               # Main App component
    ├── index.css             # Base styles
    └── main.tsx              # Entry point


**Features**
User Authentication

Login/Signup with email

Password recovery

Session management ("Keep me signed in")

Financial Tools

IPO tracking and registration

Market and sector analysis

Technical analysis tools

Broker comparison

Educational Resources

Financial blogs and articles

School/category-based learning

Investor profiles ("Sharks")

Community Features

Discussion forums

Career opportunities

Contact forms

Admin Dashboard

IPO management

User analytics

Content management

**Installation**
Backend
Navigate to backend/ directory

Install dependencies: npm install

Create .env file with your database credentials

Start server: node server.js

Frontend
Navigate to frontend/ directory

Install dependencies: npm install

Start development server: npm run dev

**Screenshoots**

**HOME PAGE**
![alt text](<Screenshot 2025-03-28 171429.png>)
![alt text](<Screenshot 2025-03-28 171445.png>)
![alt text](<Screenshot 2025-03-28 171459.png>)
![alt text](<Screenshot 2025-03-28 171518.png>)
![alt text](<Screenshot 2025-03-28 171529.png>)
![alt text](<Screenshot 2025-03-28 171537.png>)
![alt text](<Screenshot 2025-03-28 171548.png>)
![alt text](<Screenshot 2025-03-28 171559.png>)
![alt text](<Screenshot 2025-03-28 171612.png>)

**ADMIN DASHBOARD PAGE**
![alt text](<Screenshot 2025-03-28 171733.png>)
![alt text](<Screenshot 2025-03-28 171733-1.png>)
![alt text](<Screenshot 2025-03-28 171809.png>)

**PRODUCT PAGE**
![alt text](<Screenshot 2025-03-28 171827.png>)
![alt text](<Screenshot 2025-03-28 171838.png>)

**ANALYSIS PAGE**
![alt text](<Screenshot 2025-03-28 171859.png>)

**IPO PAGE**
![alt text](<Screenshot 2025-03-28 171917.png>)
![alt text](<Screenshot 2025-03-28 172030.png>)
![alt text](<Screenshot 2025-03-28 172048.png>)
![alt text](<Screenshot 2025-03-28 172103.png>)

**COMMUNITY PAGE**
![alt text](<Screenshot 2025-03-28 172328.png>)
![alt text](<Screenshot 2025-03-28 172336.png>)

**BROKERS PAGE**
![alt text](<Screenshot 2025-03-28 172353.png>)

**COMPARE PAGE**
![alt text](<Screenshot 2025-03-28 172652.png>)
![alt text](<Screenshot 2025-03-28 172705.png>)
![alt text](<Screenshot 2025-03-28 172714.png>)
![alt text](<Screenshot 2025-03-28 172722.png>)
![alt text](<Screenshot 2025-03-28 172734.png>)
![alt text](<Screenshot 2025-03-28 172749.png>)
![alt text](<Screenshot 2025-03-28 172759.png>)
![alt text](<Screenshot 2025-03-28 172807.png>)

**CARRER PAGE**
![alt text](<Screenshot 2025-03-28 173008.png>)
![alt text](<Screenshot 2025-03-28 173510.png>)
![alt text](<Screenshot 2025-03-28 173530.png>)

**MARKET PAGE**
![alt text](<Screenshot 2025-03-28 173556.png>)
![alt text](<Screenshot 2025-03-28 173620.png>)

**BLOG PAGE**
![alt text](<Screenshot 2025-03-28 173640.png>)
![alt text](<Screenshot 2025-03-28 173650.png>)

**SHARK INVESTORS PAGE**
![alt text](<Screenshot 2025-03-28 173715.png>)

**MUTHOD FINANCE**
![alt text](<Screenshot 2025-03-28 173732.png>)
![alt text](<Screenshot 2025-03-28 173740.png>)

**SCHOOL PAGE**
![alt text](<Screenshot 2025-03-28 173801.png>)

**SIGNUP PAGE**
![alt text](<Screenshot 2025-03-28 174226.png>)

**LOGIN PAGE**
![alt text](<Screenshot 2025-03-28 174234.png>)
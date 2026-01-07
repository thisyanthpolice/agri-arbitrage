# 🌾 Agri-Market Arbitrage Platform

A comprehensive web platform that analyzes price differences across regional agricultural markets and provides intelligent recommendations to help farmers identify the most profitable markets to sell their produce.

## 📋 Overview

The Agri-Market Arbitrage Platform empowers farmers by providing real-time market analysis, considering both base prices and transportation costs to determine optimal selling locations. The platform features role-based access for both farmers and administrators, ensuring efficient market data management and personalized recommendations.

## ✨ Features

### For Farmers
- 🔐 **User Authentication**: Secure signup and login system
- 📍 **Location-Based Recommendations**: Get market suggestions based on your geographical location
- 💰 **Price Analysis**: Compare base prices across different markets
- 🚚 **Transport Cost Calculator**: Factor in transportation costs for net profit calculation
- 📊 **Smart Sorting**: Markets ranked by net total cost (base price + transport cost) and distance

### For Administrators
- 🔧 **Market Management**: Add, update, and manage market information
- 📝 **Price Updates**: Real-time market price adjustments
- 👥 **User Oversight**: Monitor platform usage and user activities

### Core Functionality
- 🗺️ **Geolocation Integration**: Distance calculation using geolib
- 🎯 **Intelligent Recommendations**: Algorithm considers multiple factors for optimal market selection
- 🔄 **Real-time Data**: Up-to-date market information
- 📱 **RESTful API**: Clean and efficient API architecture

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with MongoDB Atlas)
- **ODM**: Mongoose
- **Authentication**: 
  - JWT (JSON Web Tokens)
  - bcrypt (password hashing)
- **Geolocation**: geolib
- **Middleware**: 
  - CORS (Cross-Origin Resource Sharing)
  - dotenv (Environment variables)
- **Task Scheduling**: node-cron

### Frontend
- React-based application (linked as submodule)

## 📁 Project Structure

```
agri-arbitrage/
├── agri-tech-backend/
│   ├── models/
│   │   ├── Market.js       # Market schema with location and pricing
│   │   ├── Product.js      # Product/commodity schema
│   │   └── User.js         # User schema with role-based access
│   ├── routes/
│   │   ├── auth.js         # Authentication routes (signup/login)
│   │   └── market.js       # Market CRUD and recommendation routes
│   ├── utils/              # Utility functions
│   ├── server.js           # Express server configuration
│   ├── seedAdmin.js        # Admin user seeding script
│   ├── seedMarkets.js      # Market data seeding script
│   ├── seedProducts.js     # Product data seeding script
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
└── agri-tech-frontend/     # React frontend (submodule)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/thisyanthpolice/agri-arbitrage.git
   cd agri-arbitrage
   ```

2. **Navigate to backend directory**
   ```bash
   cd agri-tech-backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Configure environment variables**
   Create a `.env` file in the `agri-tech-backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5100
   ```

5. **Seed the database** (optional)
   ```bash
   node seedAdmin.js
   node seedMarkets.js
   node seedProducts.js
   ```

6. **Start the server**
   ```bash
   node server.js
   ```
   The backend server will run on `http://localhost:5100`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd agri-tech-frontend
   ```

2. **Install dependencies and start** (refer to frontend submodule documentation)

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Register a new farmer
- `POST /login` - Login for farmers and admins

### Market Routes (`/api/market`)
- `GET /all` - Fetch all markets
- `GET /recommendations?lat=<latitude>&lng=<longitude>` - Get personalized market recommendations
- `PUT /update/:id` - Update market information (admin only)

## 🗃️ Database Models

### User Model
- name, email, password (hashed)
- role: 'farmer' | 'admin'
- city (for location-based services)

### Market Model
- name, location
- latitude, longitude (for geolocation)
- basePrice (market price for produce)
- transportCost (cost to reach market)
- description, contactInfo

### Product Model
- name, category
- imageUrl

## 🎯 How It Works

1. **Farmer Registration**: Farmers sign up with their location details
2. **Market Data**: Administrators maintain up-to-date market information
3. **Location Input**: Farmers provide their current location
4. **Smart Analysis**: System calculates:
   - Distance to each market using geolib
   - Net total cost (base price + transport cost)
5. **Recommendations**: Markets are sorted by:
   - Primary: Net total cost (ascending)
   - Secondary: Distance (ascending for equal costs)
6. **Decision Making**: Farmers receive actionable insights for maximum profit

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Role-based access control
- Environment variable protection
- CORS configuration

## 🌐 Environment Variables

Required environment variables in `.env`:

```
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your secret key for JWT>
PORT=<Server port, default: 5100>
```

---

**Built with ❤️ for farmers to maximize their agricultural profits**
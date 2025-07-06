# DSA Sheet Tracker

A comprehensive web application to track your progress in Data Structures and Algorithms practice problems. Built with React, Node.js, Express, and MongoDB.

## Features

- 🔐 User Authentication
- 📊 Progress Tracking
- 📝 Topic-wise Problem Organization
- 🎯 Difficulty Level Categorization
- 🔗 Links to Resources (YouTube, LeetCode, Articles)
- 📱 Responsive Design

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- TailwindCSS
- Vite

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd apnaCollege
```

2. Install Backend Dependencies

```bash
cd server
npm install
```

3. Configure Environment Variables
   Create a .env file in the server directory:

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Running the Application

1. Start the Backend Server

```bash
cd server
npm run dev
```

2. Start the Frontend Development Server

```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
client/
├── src/
│   ├── api/
│   ├── pages/
│   ├── components/
│   └── context/
└── public/

server/
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js
```

## Features in Detail

### Authentication

- User registration and login
- JWT-based authentication
- Protected routes

### Progress Tracking

- Track completed problems
- View progress by difficulty level
- Overall completion percentage

### Topic Organization

- Problems organized by topics
- Difficulty level indicators
- Resource links for each problem

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various DSA learning platforms
- TailwindCSS for the UI components
- MongoDB Atlas for database hosting

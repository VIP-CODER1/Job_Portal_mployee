# Job Listing Backend API

Backend API for the Job Listing Web Application built with Express.js, Node.js, and MongoDB.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB connection string

# Seed the database
node seed.js

# Start the server
npm start

# Development mode with auto-restart
npm run dev
```

## 📡 API Endpoints

### Get All Jobs
```
GET /api/jobs
```

### Filter Jobs by Location
```
GET /api/jobs?location=Bangalore
```

### Get Single Job
```
GET /api/jobs/:id
```

## 🗄️ Database Schema

```javascript
{
  title: String,
  location: String,
  description: String,
  employmentType: String,
  postedDate: Date,
  source: String,
  experienceRange: String,
  qualifications: [String],
  responsibilities: [String],
  salary: String
}
```

## 🔧 Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/joblistingdb
```

## 📦 Dependencies

- express: ^4.18.2
- mongoose: ^8.0.3
- cors: ^2.8.5
- dotenv: ^16.3.1
- nodemon: ^3.0.2 (dev)

## 🌐 Deployment

This backend can be deployed to:
- Railway.app
- Render
- Heroku
- AWS EC2

Make sure to set environment variables in your deployment platform.

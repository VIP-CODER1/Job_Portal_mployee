# Job Portal - MERN Stack Application

## 🎯 Overview

The **Job Portal** is a modern, full-stack web application designed to help job seekers find their ideal opportunities. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this platform provides an intuitive interface for browsing, searching, and applying to job listings across various industries and locations.

![Uploading image.png…]()


### Key Highlights
- 🔍 **Smart Search**: Search jobs by title, location, or company name
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Optimized queries and efficient data fetching
- 🎨 **Modern UI**: Clean interface built with Tailwind CSS
- 📄 **Easy Application**: Submit applications with resume uploads
- 🔄 **Real-time Updates**: Automatic content refresh without page reload

---

## ✨ Features

### For Job Seekers
- **User Authentication**: Secure signup and login with JWT tokens
- **User Profiles**: Personal dashboard with saved and applied jobs
- **Advanced Search**: Filter jobs by job title, location, or company name
- **Detailed Job Listings**: View comprehensive job descriptions, qualifications, and responsibilities
- **Quick Apply**: Submit applications with name, email, and resume attachment
- **Resume Upload**: Support for PDF, DOC, and DOCX formats (max 5MB)
- **Location-based Filtering**: Find jobs in specific cities or regions
- **Job Details View**: Expandable view showing full job information

### Technical Features
- **Authentication System**: JWT-based authentication with bcrypt password hashing
- **Protected Routes**: Secure user data and personalized experience
- **RESTful API**: Clean and well-documented API endpoints
- **MongoDB Integration**: Efficient data storage and retrieval
- **File Upload System**: Secure resume storage using Multer
- **CORS Enabled**: Cross-origin resource sharing for frontend-backend communication
- **Error Handling**: Comprehensive error messages and validation
- **Data Seeding**: Sample data for quick testing and development

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              React Frontend (Port 3000)                     │ │
│  │                                                              │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │ │
│  │  │  Search  │  │   Job    │  │   Job    │  │Application│  │ │
│  │  │   Bar    │  │   List   │  │ Details  │  │  Modal    │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │           API Service Layer (Axios/Fetch)              │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                   │
└───────────────────────────┬───────────────────────────────────────┘
                            │
                            │ HTTP/REST API
                            │
┌───────────────────────────▼───────────────────────────────────────┐
│                      APPLICATION LAYER                             │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │            Express.js Server (Port 5000)                    │ │
│  │                                                              │ │
│  │  ┌──────────────────┐         ┌──────────────────┐        │ │
│  │  │  CORS Middleware │         │  Body Parser     │        │ │
│  │  └──────────────────┘         └──────────────────┘        │ │
│  │                                                              │ │
│  │  ┌──────────────────┐         ┌──────────────────┐        │ │
│  │  │   Jobs Routes    │         │ Applications      │        │ │
│  │  │  /api/jobs       │         │   Routes          │        │ │
│  │  └──────────────────┘         │  /api/applications│        │ │
│  │                                └──────────────────┘        │ │
│  │  ┌──────────────────┐                                      │ │
│  │  │   Auth Routes    │         JWT Authentication          │ │
│  │  │  /api/auth       │         with bcrypt hashing         │ │
│  │  └──────────────────┘                                      │ │
│  │                                                              │ │
│  │  ┌──────────────────┐         ┌──────────────────┐        │ │
│  │  │  Multer File     │         │   Static File    │        │ │
│  │  │   Upload         │         │    Serving       │        │ │
│  │  └──────────────────┘         └──────────────────┘        │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                   │
└───────────────────────────┬───────────────────────────────────────┘
                            │
                            │ Mongoose ODM
                            │
┌───────────────────────────▼───────────────────────────────────────┐
│                       DATA LAYER                                   │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              MongoDB Database (Port 27017)                  │ │
│  │                                                              │ │
│  │  ┌──────────────────┐         ┌──────────────────┐        │ │
│  │  │  Jobs Collection │         │  Applications     │        │ │
│  │  │                  │         │   Collection      │        │ │
│  │  │  - title         │         │  - jobId          │        │ │
│  │  │  - company       │         │  - applicantName  │        │ │
│  │  │  - location      │         │  - email          │        │ │
│  │  │  - description   │         │  - resumeUrl      │        │ │
│  │  │  - ...           │         │  - ...            │        │ │
│  │  └──────────────────┘         └──────────────────┘        │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘

                            │
                            ▼
┌───────────────────────────────────────────────────────────────────┐
│                     FILE STORAGE                                   │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Local File System                              │ │
│  │              backend/uploads/resumes/                       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Interaction**: User interacts with React components in the browser
2. **API Request**: Frontend sends HTTP requests to Express.js backend
3. **Route Handling**: Express routes receive and validate requests
4. **Business Logic**: Controllers process data and apply business rules
5. **Database Operations**: Mongoose interacts with MongoDB for CRUD operations
6. **File Operations**: Multer handles file uploads to local storage
7. **Response**: Data flows back through the same path to the client

### Component Architecture

#### Frontend Components
```
App.js (Root Component)
│
├── SearchBar.js (Search functionality)
│
├── JobList.js (List container)
│   └── JobCard.js (Individual job item)
│
├── JobDetails.js (Detailed view)
│   └── ApplicationModal.js (Application form)
│
└── Logo.js (Branding component)
```

#### Backend Structure
```
server.js (Entry point)
│
├── routes/
│   ├── jobs.js (Job endpoints)
│   └── applications.js (Application endpoints)
│
├── models/
│   ├── Job.js (Job schema)
│   └── Application.js (Application schema)
│
├── data/
│   └── jobs.json (Seed data)
│
└── uploads/
    └── resumes/ (Resume storage)
```

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI library for building interactive interfaces |
| **React Router DOM** | 6.20.0 | Client-side routing and navigation |
| **Tailwind CSS** | 3.4.0 | Utility-first CSS framework for styling |
| **Axios** | 1.6.2 | HTTP client for API requests |
| **React Scripts** | 5.0.1 | Build tooling and development server |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 22.15.0+ | JavaScript runtime environment |
| **Express.js** | 4.18.2 | Web application framework |
| **MongoDB** | Latest | NoSQL database for data storage |
| **Mongoose** | 8.0.3 | MongoDB object modeling tool |
| **bcryptjs** | 2.4.3 | Password hashing and verification |
| **jsonwebtoken** | 9.0.2 | JWT token generation and verification |
| **Multer** | 1.4.5-lts.1 | File upload middleware |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **dotenv** | 16.3.1 | Environment variable management |

### Development Tools
- **nodemon** - Auto-restart server on changes
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - CSS vendor prefix automation

---

## 📁 Project Structure

```
Mployee.me_Task/
│
├── backend/                      # Backend Node.js application
│   ├── data/
│   │   └── jobs.json            # Sample job data for seeding
│   │
│   ├── models/
│   │   ├── Job.js               # Job schema and model
│   │   ├── Application.js       # Application schema and model
│   │   └── User.js              # User schema and model with authentication
│   │
│   ├── routes/
│   │   ├── jobs.js              # Job-related API endpoints
│   │   ├── applications.js      # Application submission endpoints
│   │   └── auth.js              # Authentication endpoints (login/signup)
│   │
│   ├── uploads/
│   │   └── resumes/             # Uploaded resume files
│   │
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server entry point
│   ├── seed.js                  # Database seeding script
│   └── package.json             # Backend dependencies
│
├── frontend/                     # React frontend application
│   ├── public/
│   │   ├── index.html           # HTML template
│   │   └── favicon.svg          # Site favicon
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.js          # Logo component
│   │   │   ├── Login.js         # Login page component
│   │   │   ├── Signup.js        # Signup page component
│   │   │   ├── SearchBar.js     # Search input component
│   │   │   ├── JobList.js       # Job list container
│   │   │   ├── JobCard.js       # Individual job card
│   │   │   ├── JobDetails.js    # Job details view
│   │   │   └── ApplicationModal.js  # Application form modal
│   │   │
│   │   ├── services/
│   │   │   └── api.js           # API service functions
│   │   │
│   │   ├── App.js               # Root component
│   │   ├── App.css              # Application styles
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles with Tailwind
│   │
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── package.json             # Frontend dependencies
│
├── README.md                     # This file
├── SETUP_GUIDE.md               # Quick setup instructions
├── PROJECT_SUMMARY.md           # Detailed project summary
└── DEPLOYMENT_CHECKLIST.md      # Deployment guide

```

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v22.15.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Mployee.me_Task
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
echo MONGODB_URI=mongodb://localhost:27017/job-listing > .env

# Seed the database with sample data
node seed.js

# Start the backend server
npm start
```

The backend server will start on **http://localhost:5000**

### Step 3: Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start on **http://localhost:3000** and automatically open in your browser.

### Step 4: Verify Installation

1. Open **http://localhost:3000** in your browser
2. You should see the Job Portal homepage with job listings
3. Try searching for jobs using the search bar
4. Click on a job to view details
5. Test the application functionality by submitting a sample application

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### **Jobs**

##### GET /jobs
Get all jobs with optional search filter

**Query Parameters:**
- `search` (optional) - Search by job title, location, or company name

**Example Request:**
```bash
GET /api/jobs?search=Developer
```

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Full Stack Developer",
      "company": "Geval6 Inc",
      "location": "Pune, Maharashtra, India",
      "description": "Seeking a Full Stack Developer...",
      "employmentType": "Full-time",
      "experienceRange": "0-2 years",
      "qualifications": [...],
      "responsibilities": [...],
      "salary": "₹4-8 LPA",
      "postedDate": "2024-12-23T00:00:00.000Z",
      "source": "linkedin"
    }
  ]
}
```

##### GET /jobs/:id
Get a specific job by ID

**Example Request:**
```bash
GET /api/jobs/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Full Stack Developer",
    ...
  }
}
```

#### **Applications**

##### POST /applications
Submit a job application

**Content-Type:** `multipart/form-data`

**Request Body:**
- `jobId` (string, required) - Job ID
- `jobTitle` (string, required) - Job title
- `applicantName` (string, required) - Applicant name
- `email` (string, required) - Applicant email
- `resume` (file, required) - Resume file (PDF, DOC, DOCX, max 5MB)

**Example Request:**
```bash
POST /api/applications
Content-Type: multipart/form-data

{
  "jobId": "507f1f77bcf86cd799439011",
  "jobTitle": "Full Stack Developer",
  "applicantName": "John Doe",
  "email": "john@example.com",
  "resume": <file>
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "jobId": "507f1f77bcf86cd799439011",
    "applicantName": "John Doe",
    "email": "john@example.com",
    "resumeUrl": "/uploads/resumes/resume-1703001234567.pdf",
    "status": "pending",
    "appliedDate": "2024-12-19T10:30:00.000Z"
  }
}
```

##### GET /applications
Get all applications

**Response:**
```json
{
  "success": true,
  "count": 15,
  "data": [...]
}
```

##### GET /applications/job/:jobId
Get applications for a specific job

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

---

#### **Authentication**

##### POST /auth/signup
Register a new user

**Request Body:**
- `name` (string, required) - User's full name
- `email` (string, required) - User's email address
- `password` (string, required, min 6 chars) - User's password
- `phone` (string, optional) - User's phone number
- `role` (string, optional) - User role: 'user' | 'employer' (default: 'user')

**Example Request:**
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123",
  "phone": "+1234567890",
  "role": "user"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439015",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

##### POST /auth/login
Login existing user

**Request Body:**
- `email` (string, required) - User's email address
- `password` (string, required) - User's password

**Example Request:**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepass123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439015",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

##### GET /auth/me
Get current user profile (requires authentication)

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439015",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "phone": "+1234567890",
    "savedJobs": [],
    "appliedJobs": []
  }
}
```

##### PUT /auth/profile
Update user profile (requires authentication)

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
- `name` (string, optional) - Updated name
- `phone` (string, optional) - Updated phone

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "507f1f77bcf86cd799439015",
    "name": "John Updated",
    "email": "john@example.com",
    "phone": "+9876543210",
    "role": "user"
  }
}
```

---

## 🗄️ Database Schema

### Job Schema

```javascript
{
  title: String (required),          // Job title
  company: String,                    // Company name
  location: String (required),        // Job location
  description: String (required),     // Job description
  employmentType: String (required),  // Full-time, Part-time, Contract, etc.
  postedDate: Date (default: now),    // Job posting date
  source: String (required),          // Job source (linkedin, naukri, etc.)
  experienceRange: String (required), // Required experience
  qualifications: [String],           // Array of qualifications
  responsibilities: [String],         // Array of responsibilities
  salary: String,                     // Salary information
  applicationUrl: String,             // External application URL
  createdAt: Date,                    // Auto-generated
  updatedAt: Date                     // Auto-generated
}
```

### Application Schema

```javascript
{
  jobId: ObjectId (required, ref: 'Job'),  // Reference to Job
  jobTitle: String (required),              // Job title
  applicantName: String (required),         // Applicant name
  email: String (required),                 // Applicant email
  resumeUrl: String (required),             // Resume file path
  resumeFileName: String,                   // Original file name
  status: String (default: 'pending'),      // Application status
  appliedDate: Date (default: now),         // Application date
  createdAt: Date,                          // Auto-generated
  updatedAt: Date                           // Auto-generated
}
```

### User Schema

```javascript
{
  name: String (required),                  // User's full name
  email: String (required, unique),         // User's email (unique)
  password: String (required, min 6),       // Hashed password (bcrypt)
  role: String (default: 'user'),           // 'user' | 'employer' | 'admin'
  phone: String,                            // Phone number
  resume: String,                           // Resume URL
  savedJobs: [ObjectId] (ref: 'Job'),       // Array of saved job IDs
  appliedJobs: [ObjectId] (ref: 'Job'),     // Array of applied job IDs
  isActive: Boolean (default: true),        // Account status
  createdAt: Date,                          // Auto-generated
  updatedAt: Date                           // Auto-generated
}
```

### Indexes

- **Jobs**: Text index on `title`, `location`, and `company` for fast search
- **Applications**: Index on `jobId` for quick job-specific queries
- **Users**: Unique index on `email` for authentication

---

## 🏭 Building for Production

### Backend Build

The backend doesn't require a build step, but here's how to prepare for production:

```bash
cd backend

# Set production environment variables
# Create .env.production
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/job-portal
NODE_ENV=production
PORT=5000

# Install production dependencies only
npm install --production

# Start with PM2 (recommended)
npm install -g pm2
pm2 start server.js --name job-portal-api
```

### Frontend Build

```bash
cd frontend

# Create optimized production build
npm run build

# The build folder is ready to be deployed
# Contents will be in frontend/build/
```

**Build Output:**
- Minified and optimized JavaScript bundles
- CSS extracted and minified
- Images and assets optimized
- Service worker for offline functionality (if configured)
- Static files ready for CDN deployment

### Production Environment Variables

**Backend (.env.production):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://yourdomain.com
```

**Frontend (.env.production):**
```env
REACT_APP_API_URL=https://api.yourdomain.com/api
```

---

## 🚢 Deployment

### Backend Deployment (Heroku Example)

```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create job-portal-api

# Set environment variables
heroku config:set MONGODB_URI=mongodb+srv://...
heroku config:set NODE_ENV=production

# Deploy
git subtree push --prefix backend heroku main

# View logs
heroku logs --tail
```

### Frontend Deployment (Netlify Example)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the app
cd frontend
npm run build

# Deploy
netlify deploy --prod --dir=build
```

### Alternative Deployment Options

**Backend:**
- AWS EC2 / Elastic Beanstalk
- DigitalOcean App Platform
- Google Cloud Platform
- Azure App Service
- Railway
- Render

**Frontend:**
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages

**Database:**
- MongoDB Atlas (recommended)
- AWS DocumentDB
- DigitalOcean Managed MongoDB

---

## 🧪 Testing

### Manual Testing Checklist

**Search Functionality:**
- [ ] Search by job title
- [ ] Search by location
- [ ] Search by company name
- [ ] Clear search and view all jobs

**Job Browsing:**
- [ ] View job list
- [ ] Click on job card to see details
- [ ] Navigate between different jobs
- [ ] View qualifications and responsibilities

**Application Submission:**
- [ ] Open application modal
- [ ] Fill in name and email
- [ ] Upload resume (PDF, DOC, DOCX)
- [ ] Submit application
- [ ] Verify success message
- [ ] Check file size validation (5MB limit)
- [ ] Check file type validation

**API Testing:**
```bash
# Test job search
curl http://localhost:5000/api/jobs?search=Developer

# Test single job
curl http://localhost:5000/api/jobs/<job_id>

# Test application submission
curl -X POST http://localhost:5000/api/applications \
  -F "jobId=<job_id>" \
  -F "jobTitle=Developer" \
  -F "applicantName=John Doe" \
  -F "email=john@example.com" \
  -F "resume=@/path/to/resume.pdf"
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write descriptive commit messages

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Authors

- **Vipul** - Initial work

---

## 🙏 Acknowledgments

- React team for the amazing library
- MongoDB team for the robust database
- Tailwind CSS team for the utility-first framework
- All contributors and testers

---

## 📧 Contact & Support

For questions, issues, or suggestions:
- Create an issue on GitHub
- Email: support@jobportal.com
- Documentation: [Full Documentation](./SETUP_GUIDE.md)

---

## 🔄 Version History

### v1.0.0 (December 2024)
- Initial release
- Job search and filtering
- Application submission with resume upload
- Responsive design
- MongoDB integration
- 32 sample job listings

---

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Employer dashboard for posting jobs
- [ ] Advanced filtering (salary range, experience level, employment type)
- [ ] Pagination for job listings
- [ ] Email notifications for applications
- [ ] Job recommendations based on user profile
- [ ] Save jobs to favorites
- [ ] Application tracking for users
- [ ] Analytics dashboard for employers
- [ ] Integration with external job boards
- [ ] Resume parsing and auto-fill
- [ ] Video interview scheduling
- [ ] Skill-based matching algorithm

---

<div align="center">
  <p>Made with ❤️ using MERN Stack</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

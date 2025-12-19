const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware - CORS configuration
const allowedOrigins = [
  'https://job-portal-mployee.vercel.app',
  'http://localhost:3000',
  'http://localhost:5000'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/auth', require('./routes/auth'));

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Job Listing API',
    version: '1.0.0',
    endpoints: {
      jobs: '/api/jobs',
      jobsWithLocation: '/api/jobs?location=yourLocation'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}`);
});

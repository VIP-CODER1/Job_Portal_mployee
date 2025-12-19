const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship']
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    required: true
  },
  experienceRange: {
    type: String,
    required: true
  },
  qualifications: [String],
  responsibilities: [String],
  salary: String,
  applicationUrl: String
}, {
  timestamps: true
});

// Index for faster searches
jobSchema.index({ location: 'text', title: 'text', company: 'text' });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

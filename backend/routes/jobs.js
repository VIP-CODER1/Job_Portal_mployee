const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// GET all jobs with optional search filter (title or location)
router.get('/', async (req, res) => {
  try {
    const { location, search } = req.query;
    let query = {};

    // Support both location and general search parameters
    const searchTerm = search || location;

    if (searchTerm && searchTerm.trim() !== '') {
      // Case-insensitive search for title, location, or company
      query.$or = [
        { title: { $regex: searchTerm, $options: 'i' } },
        { location: { $regex: searchTerm, $options: 'i' } },
        { company: { $regex: searchTerm, $options: 'i' } }
      ];
    }

    const jobs = await Job.find(query).sort({ postedDate: -1 });
    res.json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching jobs',
      error: error.message
    });
  }
});

// GET single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    res.json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching job',
      error: error.message
    });
  }
});

// POST create a new job
router.post('/', async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating job',
      error: error.message
    });
  }
});

// DELETE a job
router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    res.json({
      success: true,
      message: 'Job deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting job',
      error: error.message
    });
  }
});

module.exports = router;

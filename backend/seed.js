const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('./models/Job');
const jobsData = require('./data/jobs.json');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    seedDatabase();
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Job.deleteMany({});
    console.log('🗑️  Cleared existing jobs');

    // Insert new data
    const jobs = await Job.insertMany(jobsData);
    console.log(`✅ Successfully inserted ${jobs.length} jobs into database`);
    
    console.log('\n📊 Sample jobs inserted:');
    jobs.slice(0, 3).forEach(job => {
      console.log(`  - ${job.title} (${job.location})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Logo from './components/Logo';
import { fetchJobs } from './services/api';
import './App.css';

// Home Page Component with Job Listings
function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loadJobs = async (searchTerm = '') => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchJobs(searchTerm);
      setJobs(data);
      
      // Auto-select first job if available
      if (data.length > 0 && !selectedJob) {
        setSelectedJob(data[0]);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error loading jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term = searchTerm) => {
    loadJobs(term);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    loadJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-full mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Job Portal</h1>
                <p className="text-sm text-gray-500">Find Your Dream Job</p>
              </div>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-full mx-auto px-8 py-6">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">Error loading jobs</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Job List - Left Side */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
            <div className="mb-4 pb-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Available Jobs
                {!loading && (
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({jobs.length} {jobs.length === 1 ? 'job' : 'jobs'})
                  </span>
                )}
              </h2>
            </div>
            <JobList
              jobs={jobs}
              selectedJob={selectedJob}
              onJobSelect={handleJobSelect}
              loading={loading}
            />
          </div>

          {/* Job Details - Right Side */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-6">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading jobs...</p>
                </div>
              </div>
            ) : selectedJob ? (
              <JobDetails job={selectedJob} user={user} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">No job selected</p>
                  <p className="text-gray-400 text-sm mt-2">Select a job from the list to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// Main App Component with Router
function App() {
  const handleLogin = (userData) => {
    // User data is already stored in localStorage by Login component
    window.location.href = '/';
  };

  const handleSignup = (userData) => {
    // User data is already stored in localStorage by Signup component
    window.location.href = '/';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>
    </Router>
  );
}

export default App;

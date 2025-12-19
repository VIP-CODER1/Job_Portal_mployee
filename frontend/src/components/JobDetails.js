import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationModal from './ApplicationModal';

const JobDetails = ({ job, user }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Reset modal state when job changes
  useEffect(() => {
    setShowModal(false);
  }, [job?._id]);

  const handleApplyClick = () => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login');
      return;
    }
    setShowModal(true);
  };

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-medium">Select a job to view details</p>
        <p className="text-sm">Click on any job from the list to see more information</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="overflow-y-auto max-h-[calc(100vh-140px)] pr-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{job.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Posted on {formatDate(job.postedDate)}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
              {job.employmentType}
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full font-medium">
              {job.experienceRange}
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
              {job.source}
            </span>
          </div>
          <button
            onClick={handleApplyClick}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Quick Apply
          </button>
        </div>
      </div>

      {/* Salary */}
      {job.salary && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-sm font-semibold text-green-800 mb-1">Salary Range</h3>
          <p className="text-green-700">{job.salary}</p>
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
      </div>

      {/* Qualifications */}
      {job.qualifications && job.qualifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Qualifications</h2>
          <div className="flex flex-wrap gap-2">
            {job.qualifications.map((qual, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-300"
              >
                {qual}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h2>
          <ul className="space-y-2">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Application Modal */}
      <ApplicationModal
        job={job}
        user={user}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* Apply Button */}
      <div id="apply-section" className="mt-8 pt-6 border-t border-gray-200">
        <button 
          onClick={handleApplyClick}
          className="w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Quick Apply
        </button>
        <p className="text-center text-sm text-gray-500 mt-3">
          By applying, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
};

export default JobDetails;

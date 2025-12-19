import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, selectedJob, onJobSelect, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-lg font-medium">No jobs found</p>
        <p className="text-sm">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          isSelected={selectedJob?._id === job._id}
          onClick={() => onJobSelect(job)}
        />
      ))}
    </div>
  );
};

export default JobList;

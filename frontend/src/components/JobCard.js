import React from 'react';

const JobCard = ({ job, isSelected, onClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
        isSelected
          ? 'bg-purple-50 border-primary shadow-md'
          : 'bg-white border-gray-200 hover:border-primary hover:shadow-sm'
      }`}
    >
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{job.title}</h3>
      
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{job.location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
          {job.employmentType}
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
          {job.experienceRange}
        </span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
        {job.description}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200">
        <span>Posted {formatDate(job.postedDate)}</span>
        <span className="text-primary font-medium">{job.source}</span>
      </div>
    </div>
  );
};

export default JobCard;

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchJobs = async (search = '') => {
  try {
    const url = search 
      ? `${API_BASE_URL}/jobs?search=${encodeURIComponent(search)}`
      : `${API_BASE_URL}/jobs`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch jobs');
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const fetchJobById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch job');
    }
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

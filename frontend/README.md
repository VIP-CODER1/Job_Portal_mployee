# Job Listing Frontend

React-based frontend for the Job Listing Web Application with Tailwind CSS styling.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 🎨 Features

- **Job List View**: Browse all available jobs
- **Job Details View**: Click on any job to see full details
- **Location Search**: Filter jobs by location in real-time
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Beautiful transitions and hover effects

## 🛠️ Tech Stack

- React.js 18
- Tailwind CSS 3
- Axios for API calls
- React Hooks for state management

## 📁 Component Structure

```
src/
├── components/
│   ├── SearchBar.js      # Search input component
│   ├── JobCard.js        # Individual job card
│   ├── JobList.js        # List of job cards
│   └── JobDetails.js     # Detailed job view
├── services/
│   └── api.js            # API service layer
├── App.js                # Main app component
└── index.js              # Entry point
```

## 🔧 Environment Variables

```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production, update this to your deployed backend URL.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Set root directory to `frontend`
4. Add environment variable: `REACT_APP_API_URL`
5. Deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set environment variables in Netlify dashboard

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#7c3aed',  // Change primary color
      secondary: '#ec4899', // Change secondary color
    }
  }
}
```

### Styling
All components use Tailwind CSS utility classes. Modify classes directly in components for styling changes.

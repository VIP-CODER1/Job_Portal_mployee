# Quick Deployment Steps

## 🎯 Backend on Render (5 minutes)

1. **MongoDB Atlas Setup** (if not done)
   - Create account: https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Allow access from anywhere (0.0.0.0/0)

2. **Push to GitHub**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Render**
   - Go to https://render.com/
   - New → Web Service
   - Connect GitHub repo
   - Settings:
     - Name: `job-portal-backend`
     - Build: `npm install`
     - Start: `node server.js`
     - Add env vars:
       - `MONGODB_URI`: (your MongoDB connection string)
       - `JWT_SECRET`: (generate random secret)
   - Click Deploy

4. **Note Your Backend URL**
   - Will be something like: `https://job-portal-backend.onrender.com`

---

## 🎯 Frontend on Vercel (3 minutes)

1. **Update Production Config**
   - Edit `frontend/.env.production`
   - Replace with your actual Render backend URL:
   ```
   REACT_APP_API_URL=https://your-actual-backend.onrender.com
   ```

2. **Push to GitHub**
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to https://vercel.com/
   - Import Project → GitHub repo
   - Settings:
     - Framework: Create React App
     - Build: `npm run build`
     - Output: `build`
     - Add env var:
       - `REACT_APP_API_URL`: (your Render backend URL)
   - Click Deploy

4. **Your App is Live!**
   - Frontend: `https://your-app.vercel.app`
   - Backend: `https://your-backend.onrender.com`

---

## ✅ Post-Deployment

1. **Test Your App**
   - Open frontend URL
   - Check if jobs load
   - Try signup/login
   - Apply to a job

2. **Seed Database** (Optional)
   - Go to Render dashboard → Shell
   - Run: `node seed.js`

---

## 🔧 If Something Goes Wrong

### Backend not responding?
- Check Render logs
- Verify MongoDB connection string
- Ensure environment variables are set

### Frontend can't reach backend?
- Check REACT_APP_API_URL in Vercel
- Verify backend URL is correct
- Check Render backend is running (not sleeping)

### CORS errors?
- Backend will need to update CORS config
- Add your Vercel URL to allowed origins

---

## 💡 Pro Tips

1. **Render Free Tier**: Spins down after 15 min inactivity
   - First request may take 30-60 seconds
   - Consider using Render's paid tier for production

2. **Environment Variables**: 
   - Never commit `.env` files
   - Use `.env.example` as template

3. **Monitoring**:
   - Render: Check logs in dashboard
   - Vercel: View deployment logs

4. **Custom Domains**:
   - Add in Vercel/Render settings
   - Update DNS records as instructed

# Databricks App - React + FastAPI

> **Quick Deploy**: To deploy this app to Databricks, run `python deploy_to_databricks.py`

A full-stack application built with React (TypeScript, MUI, Framer Motion) and FastAPI, designed for deployment on Databricks Apps.

## Project Structure

```
.
├── frontend/           # React application
│   ├── src/
│   │   ├── main.tsx    # Entry point with MUI theme
│   │   └── App.tsx     # Main app with drawer navigation
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/            # FastAPI application
│   ├── main.py         # API endpoints and static file serving
│   ├── requirements.txt
│   └── .env            # Local environment config
├── build.py            # Production build script
├── deploy_to_databricks.py  # Databricks deployment script
├── app.yaml            # Databricks app configuration
└── README.md
```

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on http://localhost:5173 and proxies `/api` requests to the backend.

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API runs on http://localhost:8000 with interactive docs at http://localhost:8000/docs.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check - returns status and environment |
| `/api/data` | GET | Sample data endpoint |
| `/docs` | GET | Interactive API documentation (Swagger UI) |

## Building for Production

```bash
python build.py
```

This will:
1. Install frontend dependencies
2. Build the React app to `frontend/dist`
3. Copy static files to `backend/static`
4. Verify backend requirements

## Deploying to Databricks

### Prerequisites

- Databricks CLI installed: `pip install databricks-cli`
- Databricks CLI configured: `databricks configure --token`

### Deploy

```bash
# Normal deployment
python deploy_to_databricks.py

# Hard redeploy (delete and redeploy)
python deploy_to_databricks.py --hard-redeploy

# Custom app name and folder
python deploy_to_databricks.py --app-name my-app --app-folder /Workspace/Users/user@example.com/my-app
```

The deployment script will:
1. Check Databricks CLI installation and configuration
2. Auto-detect workspace URL and user email
3. Build the React frontend
4. Package the backend (excluding venv, tests, cache, etc.)
5. Import to Databricks workspace
6. Deploy the app
7. Display the app URL

## Troubleshooting

### Frontend won't start
- Make sure Node.js 18+ is installed
- Run `npm install` in the `frontend/` directory
- Check that port 5173 is not in use

### Backend won't start
- Make sure Python 3.9+ is installed
- Install dependencies: `pip install -r backend/requirements.txt`
- Check that port 8000 is not in use

### Static files not found in production
- Run `python build.py` to build and copy static files
- Verify `backend/static/` exists and contains `index.html`

### Databricks deployment fails
- Verify CLI is configured: `databricks workspace list /`
- Check that your token has not expired
- For "app already exists" errors, use `--hard-redeploy`

### CORS errors in development
- The backend allows `localhost:5173` and `localhost:3000` by default
- The Vite dev server proxies `/api` requests to avoid CORS issues

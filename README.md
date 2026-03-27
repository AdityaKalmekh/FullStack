# Full-Stack CRUD Application

A simple user management system built with React (Vite) and Node.js (Express).

## Features
- Login and Signup functionality with validation
- Add, Edit, Delete users
- Form validation with react-hook-form
- Unique IDs for each record
- Loading and error states
- Clean, responsive UI
- Duplicate email prevention

## Setup Instructions

### 1. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 2. Run the Application

**Terminal 1 - Start Backend (Port 5000):**
```bash
cd server
npm start
```

**Terminal 2 - Start Frontend (Port 5173):**
```bash
cd client
npm run dev
```

### 3. Access the App
Open your browser and go to: `http://localhost:5173`

You'll see two tabs:
1. Login/Signup - Authentication functionality
2. User Management - CRUD operations for users

## API Endpoints

### Authentication
- `POST /api/signup` - Register new user (email, password)
- `POST /api/login` - Login user (email, password)

### User Management
- `GET /api/users` - Fetch all users
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Project Structure
```
├── client/              # React frontend
│   ├── src/
│   │   ├── MainApp.jsx # Main wrapper with tabs
│   │   ├── Auth.jsx    # Login/Signup component
│   │   ├── App.jsx     # User management component
│   │   ├── main.jsx    # Entry point
│   │   └── index.css   # Styles
│   └── package.json
├── server/              # Express backend
│   ├── index.js        # API routes (auth + users)
│   └── package.json
└── README.md
```

## Form Fields
- Name (required)
- Email (required, validated)
- Phone (required)
- Gender (required, dropdown)
- City (required)

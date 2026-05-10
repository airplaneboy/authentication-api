# Backend Authentication API

A full-stack authentication project built with Next.js, MongoDB, JWT, and Tailwind CSS.

## Live Demo

[-----]

## GitHub Repository

[----]

## Features

- User signup
- User login
- Password hashing with bcryptjs
- JWT authentication
- HTTP-only cookie storage
- Protected dashboard route
- Logout system
- MongoDB database integration
- Light and dark mode UI
- Responsive design

## Tech Stack

- Next.js
- React
- Tailwind CSS
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/signup` | Create a new user |
| POST | `/api/auth/login` | Log in user |
| GET | `/api/auth/me` | Get logged-in user |
| POST | `/api/auth/logout` | Log out user |

## Environment Variables

Create a `.env.local` file in the root folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

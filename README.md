Here is your **COMPLETE README.md in one single block** (ready to copy-paste directly into GitHub):

---

````md
# 🚀 Student Profile Management System (Backend API)

A Node.js + Express + MongoDB backend project with JWT authentication and full CRUD operations for students.

---

# 📌 Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Create, Read, Update, Delete Students
- MongoDB Database Integration
- REST API Structure

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcryptjs
- dotenv

---

# 📁 Project Setup

## 1. Install dependencies

```bash
npm install
````

---

## 2. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/backend-api
JWT_SECRET=mySuperSecretKey123
```

---

## 3. Start MongoDB

Make sure MongoDB is running:

```bash
mongod
```

---

## 4. Run the server

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

# 🔐 Authentication APIs

## Register User

```
POST /api/auth/register
```

### Body:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

## Login User

```
POST /api/auth/login
```

### Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

# 🎓 Student APIs (Protected Routes)

👉 Add this header in all requests:

```
Authorization: Bearer YOUR_TOKEN
```

---

## Create Student

```
POST /api/students
```

---

## Get All Students

```
GET /api/students
```

---

## Get Single Student

```
GET /api/students/:id
```

---

## Update Student

```
PUT /api/students/:id
```

---

## Delete Student

```
DELETE /api/students/:id
```

---

# 🔐 Authentication Flow

```
Register → Login → Get Token → Use Token → Access Student APIs
```





Just tell 👍
```

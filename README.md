# 💰 Expense Tracker (Full Stack)

A modern **Full Stack Expense Tracker Web Application** built using:

* Frontend: HTML, CSS, JavaScript, Chart.js
* Backend: Node.js, Express.js
* Database: MongoDB

---

## 🚀 Features

* ➕ Add Expenses
* 📋 View Recent Expenses
* 📊 Category-wise Analytics (Doughnut Chart)
* 📈 Monthly Spending (Bar Chart)
* 🌙 Dark Mode Toggle
* 💾 Data stored in MongoDB
* 🔄 Auto load data after refresh

---

## 🏗️ Project Structure

```
expense-tracker
│
├── backend
│   ├── models
│   ├── routes
│   └── server.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Varun1821/expense-tracker.git
cd expense-tracker
```

---

### 2️⃣ Install Backend Dependencies

```
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017
```

---

### 4️⃣ Run Backend Server

```
cd backend
node server.js
```

You should see:

```
Server running on port 3000
MongoDB Connected
```

---

### 5️⃣ Run Frontend

Open `public/index.html` using:

* Live Server (VS Code)
  or
* Browser

```
http://127.0.0.1:5500/
```

---

## 🔗 API Endpoints

### ➕ Add Expense

```
POST /addExpense
```

Body:

```
{
  "title": "food",
  "amount": 100,
  "category": "meal"
}
```

---

### 📥 Get Expenses

```
GET /expenses
```

---

## 🧠 Tech Stack

* Frontend: HTML, CSS, JavaScript
* Charts: Chart.js
* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)

---

## 📊 How It Works

```
Frontend (Browser)
        ↓
Fetch API
        ↓
Node.js Server (Express)
        ↓
MongoDB Database
```

---

## 🛠️ Future Improvements

* ✏️ Edit Expense
* ❌ Delete from MongoDB
* 🔐 User Authentication
* ☁️ Deploy on Cloud (Vercel + MongoDB Atlas)
* 📱 Mobile App Version

---

## 👨‍💻 Author

**Varun Balajee S**

* GitHub: https://github.com/Varun1821

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

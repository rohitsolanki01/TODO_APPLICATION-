# 📝 Todo Application

A full-stack **Todo Application** built with **Node.js, Express, MongoDB, and React**.  
This app allows users to **create, read, update, and delete (CRUD)** todos with a clean UI.

---

## 🚀 Features

- ➕ Create a new todo
- 📋 View all todos
- ✏️ Edit and update todos
- ❌ Delete todos
- ✅ Mark todos as completed or not completed
- 🎨 Styled with **TailwindCSS**
- 🔔 Toast notifications using **React-Toastify**

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Zod for validation

### Frontend
- React.js (Vite/CRA)
- Axios (API calls)
- React Router DOM (Navigation)
- TailwindCSS
- React-Toastify (Notifications)

---

## 📂 Project Structure
  todo-app/
│
├── backend/

│ ├── models/

│ │ └── todo.js

│ ├── routes/

│ │ └── todoRoutes.js

│ ├── types/

│ │ └── todoValidation.js

│ ├── server.js

│
├── frontend/

│ ├── src/

│ │ ├── components/

│ │ │ ├── CreateTodo.jsx

│ │ │ ├── Todo.jsx

│ │ │ └── EditTodo.jsx

│ │ ├── App.jsx

│ │ └── main.jsx

│ ├── package.json

│
└── README.md





---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/rohitsolanki01/TODO_APPLICATION-.git
cd todo-app


2️⃣ Setup Backend
cd backend
npm install
nodemon indiex.js

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev

🔗 API Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/api/todo`     | Get all todos         |
| GET    | `/api/todo/:id` | Get single todo by ID |
| POST   | `/api/todo`     | Create a new todo     |
| PUT    | `/api/todo/:id` | Update todo by ID     |
| DELETE | `/api/todo/:id` | Delete todo by ID     |


🎯 Usage

Start backend & frontend servers.

Open browser at http://localhost:5173.

Create, edit, delete, and manage todos 🚀.


🧑‍💻 Author

Rohit Solanki

GitHub: @https://github.com/rohitsolanki01



---




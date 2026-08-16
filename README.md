<div align="center">

<img width="64" height="64" alt="Just Do It logo" src="https://github.com/user-attachments/assets/547c77a4-6153-4508-9a88-057e9fc06fa9" />

# ⚡ Just Do It — Full-Stack Task Workspace

A full-stack task management application with a React front end, an Express/Node API, and MongoDB persistence.

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#system-architecture">Architecture</a> •
  <a href="#api-endpoints">API Endpoints</a> •
  <a href="#installation--setup">Installation</a>
</p>

</div>

---

## 🎬 Demo

<div align="center">

<video width="320" height="240" controls>
  <source src="https://github.com/naitikatcoding/Todo-list-maker/blob/main/src/assets/demo.mp4" type="video/mp4">
</video>

</div>

---

## ✨ Key Features

- **Animated task panel** — CSS Grid-based expand/collapse for the add-task form, without relying on `height: auto`.
- **Responsive board layout** — task grid adapts from a single column on mobile to a multi-column layout on desktop.
- **Expandable task cards** — long descriptions are clamped by default and expand on click.
- **Live sync with MongoDB** — create, update, and delete operations persist immediately to the database.
- **Centered nav layout** — page heading stays visually centered regardless of the width of surrounding actions.

---

## 🛠️ Tech Stack

<div align="center">

### 🌐 Frontend
<img src="https://skillicons.dev/icons?i=html&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=css&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=js&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=react&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=vite&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=tailwind&theme=dark" width="60" height="60" style="margin: 0 10px;" />

Component-driven UI, utility-first styling, and fast HMR during development.

<br>

### 🔧 Backend & Server
<img src="https://skillicons.dev/icons?i=nodejs&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://skillicons.dev/icons?i=express&theme=dark" width="60" height="60" style="margin: 0 10px;" />

Node.js runtime with Express handling routing, controllers, and middleware.

<br>

### 🗄️ Database & Modeling
<img src="https://skillicons.dev/icons?i=mongodb&theme=dark" width="60" height="60" style="margin: 0 10px;" />
<img src="https://cdn.simpleicons.org/mongoose/F04D35" width="60" height="60" alt="Mongoose" style="margin: 0 10px; vertical-align:middle;" />

MongoDB for document storage, with Mongoose handling schema validation and query modeling.

</div>

---

## 📐 System Architecture

<div align="center">

```text
┌────────────────────────┐
│   React Client (Vite)  │ ◄─── UI Interactivity & Local State
└───────────┬────────────┘
            │ (Async HTTP / REST JSON Payloads)
            ▼
┌────────────────────────┐
│ Node.js + Express API  │ ◄─── Controllers, Routing & CORS Middleware
└───────────┬────────────┘
            │ (Schema Queries & Validations)
            ▼
┌────────────────────────┐
│  Mongoose ODM Layer    │ ◄─── Data Structure Model Enforcement
└───────────┬────────────┘
            │ (Atomic BSON Modifications)
            ▼
┌────────────────────────┐
│ MongoDB Storage Engine │ ◄─── Permanent Persistence & ObjectIDs
└────────────────────────┘
```

</div>

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Fetch all tasks |
| `GET` | `/api/tasks/:id` | Fetch a single task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

> Adjust these to match your actual route file — this table assumes a standard REST resource under `/api/tasks`.

---

## 🚀 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/just-do-it.git
cd just-do-it

# 2. Install server dependencies
cd backend
npm install

# 3. Install client dependencies
cd ../client
npm install

# 4. Configure environment variables
# Create a .env file in /server with:
# MONGODB_URI=your_connection_string
# PORT=5000

# 5. Run the app
# In /server:
npm start
# In /client (separate terminal):
npm run dev
```

The client will run on Vite's default port (usually `5173`), and the API on whichever `PORT` you set in `.env`.

---

<div align="center">

Made with React, Express, and MongoDB.

</div>

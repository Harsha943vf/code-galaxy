
---

# 🚀 Code Galaxy — Real-Time Collaborative Code Editor

Code Galaxy is a **real-time collaborative code editor** that allows multiple users to join a shared room and code together with **live synchronization**, **cursor tracking**, **file system sharing**, **chat**, **whiteboard drawing**, **code execution**, and **AI-powered code generation**.

This project focuses on solving real-world problems like **concurrency**, **real-time state synchronization**, and **event-driven communication**.

---

## 🧠 Key Features

* 👥 **Multi-user collaboration** with room-based sessions
* ✍️ **Real-time code editing** with cursor & typing indicators
* 📁 **Shared file system** (create, rename, delete files & folders)
* 📑 **Multi-file tabs** (IDE-like experience)
* 🎨 **Collaborative whiteboard** using TLDraw
* 💬 **Real-time chat** between collaborators
* ▶️ **Secure code execution** using Piston API
* 🤖 **AI Copilot** for code generation
* 📱 **Responsive design** (desktop & mobile friendly)

---

## 🏗️ System Architecture

```
React Client (CodeMirror, TLDraw)
        |
        |  Socket.IO (Real-time events)
        |
Node.js Server (Express + Socket.IO)
        |
        ├── Piston API (Code Execution)
        └── Pollinations AI (AI Copilot)
```

* **Event-driven architecture**
* **Concurrent multi-user editing**
* **Eventually consistent system**

---

## 🛠️ Tech Stack

### Frontend

* **React + TypeScript**
* **CodeMirror** (code editor)
* **TLDraw** (whiteboard)
* **Socket.IO Client**
* **Tailwind CSS**
* **React Context API**

### Backend

* **Node.js**
* **Express**
* **Socket.IO**

### External Services

* **Piston API** — secure code execution
* **Pollinations AI** — AI-based code generation

---

## 📂 Project Structure

```
Code_Galaxy/
├── client/
│   ├── components/   # Editor, sidebar, workspace, UI
│   ├── context/      # Global state management
│   ├── hooks/        # Custom reusable hooks
│   ├── api/          # External API integrations
│   ├── types/        # TypeScript contracts
│   └── utils/        # Helper functions
│
├── server/
│   ├── server.ts     # Socket.IO server
│   └── types/        # Socket & user types
```

---

## 🔁 Real-Time Data Flow

1. User action (typing, file change, drawing)
2. Frontend emits **Socket.IO event**
3. Server broadcasts event to room
4. Other clients update state instantly

---

## 🧩 State Management

The frontend uses **React Context API**, split by responsibility:

* `AppContext` → users, status, activity
* `SocketContext` → socket connection
* `FileContext` → file system & editor state
* `ChatContext` → messages
* `RunCodeContext` → code execution
* `SettingContext` → editor preferences
* `CopilotContext` → AI code generation

This keeps the system **modular, scalable, and maintainable**.

---

## 🔐 Security Considerations

* Code execution is **sandboxed** using Piston API
* No user code runs on the backend server
* Event payloads are minimal and controlled

---

## 🚀 Scalability (Future Improvements)

* Redis adapter for Socket.IO
* Persistent file storage (DB / S3)
* CRDT-based conflict resolution
* Authentication & authorization
* Version history & undo across users

---

## 🎯 Learning Outcomes

This project demonstrates:

* Real-time systems
* Event-driven architecture
* Frontend performance optimization
* Collaborative editor design
* Scalable state management
* Practical use of TypeScript

---

## 👨‍💻 Author

**Harsha Vardhan Reddy Chalamalla**
Frontend Engineer | Real-Time Systems Enthusiast

---

## ⭐ Final Note
Code Galaxy goes beyond CRUD applications by addressing real-time collaboration, concurrency, and system design challenges found in modern engineering platforms.*


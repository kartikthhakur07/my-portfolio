# 🌐 Personal Portfolio Website

A full-stack personal portfolio built with the **MERN stack** to showcase projects and skills.

🔗 **Live Demo:** [my-portfolio-three-eta-ayderqs0it.vercel.app](https://my-portfolio-three-eta-ayderqs0it.vercel.app)

---

## 📸 Preview

> A responsive portfolio featuring a hero section, about me, live projects from a database, and a contact section.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Deployment | Vercel (frontend), Render (backend) |

---

## ✨ Features

- Responsive single-page design
- Projects dynamically loaded from MongoDB Atlas
- REST API with full CRUD support (GET, POST, DELETE)
- Environment-based configuration for dev and production
- Deployed and live on the internet

---

## 📁 Project Structure

```
my-portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Hero.js
│       │   ├── About.js
│       │   ├── Projects.js
│       │   └── Contact.js
│       ├── api.js          # Axios API helper
│       └── App.js
└── server/                 # Node.js backend
    ├── models/
    │   └── Project.js      # Mongoose schema
    ├── routes/
    │   └── projects.js     # API routes
    ├── seed.js             # Database seeder
    └── index.js            # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/kartikthhakur07/my-portfolio.git
cd my-portfolio
```

**2. Set up the backend**
```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
CLIENT_URL=http://localhost:3000
```

**3. Seed the database**
```bash
node seed.js
```

**4. Start the backend server**
```bash
npm run dev
```

**5. Set up the frontend**
```bash
cd ../client
npm install
```

Create a `.env` file inside the `client` folder:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

**6. Start the frontend**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🌍 Deployment

| Service | Purpose | URL |
|---------|---------|-----|
| Vercel | Frontend hosting | [vercel.com](https://vercel.com) |
| Render | Backend hosting | [render.com](https://render.com) |
| MongoDB Atlas | Cloud database | [mongodb.com/atlas](https://mongodb.com/atlas) |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Add a new project |
| DELETE | `/api/projects/:id` | Delete a project |

---

## 📦 Dependencies

### Backend
- `express` — Web framework
- `mongoose` — MongoDB ODM
- `cors` — Cross-origin requests
- `dotenv` — Environment variables

### Frontend
- `react` — UI library
- `axios` — HTTP requests

---

## 👤 Author

**Kartik Thakur**
- GitHub: [@kartikthhakur07](https://github.com/kartikthhakur07)
- LinkedIn:https://www.linkedin.com/in/kartik-thakur-b2b826332
- Portfolio:https://my-portfolio-three-eta-ayderqs0it.vercel.app

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

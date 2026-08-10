import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

// ── Student data defined in App and passed down via props ────
const studentData = {
  name: "Ahmed Rahman",
  studentId: "STU-2024-0042",
  department: "BSc Computer Science",
  email: "ahmed.rahman@university.edu",
  phone: "+880 1712-345678",
  image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ahmed&backgroundColor=b6e3f4",
  isActive: true,
};

// ── Skills array — rendered with map() ──────────────────────
const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Git",
  "Node.js",
  "MongoDB",
];

function App() {
  // ── Form State ───────────────────────────────────────────────
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ── Handle input change ──────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ── Handle form submit — prevent refresh, log to console ────
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="app-wrapper">

      {/* ── Header ── */}
      <Header />

      <main className="main-content">

        {/* ── Student Profile Card ── */}
        <StudentProfile
          name={studentData.name}
          studentId={studentData.studentId}
          department={studentData.department}
          email={studentData.email}
          phone={studentData.phone}
          image={studentData.image}
          isActive={studentData.isActive}
        />

        {/* ── Skills Section — list rendering with map() ── */}
        <div className="section-card">
          <h2 className="section-title">🛠 Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Form ── */}
        <div className="section-card">
          <h2 className="section-title">📩 Contact Form</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Submit ✉️
            </button>
          </form>
        </div>

      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import StudentInfo from "./StudentInfo";

// StudentProfile receives all student data from App via props
const StudentProfile = ({ name, studentId, department, email, phone, image, isActive }) => {

  // ── State: Show/Hide Details ────────────────────────────────
  const [showDetails, setShowDetails] = useState(true);

  // ── State: Show Hello Message ───────────────────────────────
  const [showHello, setShowHello] = useState(false);

  // ── Event: Toggle show/hide details ────────────────────────
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // ── Event: Say Hello button click ───────────────────────────
  const handleSayHello = () => {
    setShowHello(true);
  };

  return (
    <div className="profile-card">

      {/* Top banner with avatar and name */}
      <div className="profile-card-top">
        <img
          className="profile-avatar"
          src={image}
          alt={`${name}'s profile`}
        />
        <div className="profile-name-block">
          <h2>{name}</h2>
          <p>{department}</p>

          {/* Buttons — Show/Hide Details & Say Hello */}
          <div className="profile-actions">
            <button className="btn btn-white" onClick={handleToggleDetails}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            <button className="btn btn-outline" onClick={handleSayHello}>
              Say Hello 👋
            </button>
          </div>
        </div>
      </div>

      {/* Hello message — conditionally rendered after button click */}
      {showHello && (
        <p className="hello-message">
          👋 Hello, welcome to my React application!
        </p>
      )}

      {/* Conditional rendering: Active/Inactive status */}
      <div className={`status-badge ${isActive ? "active" : "inactive"}`}>
        <span className="status-dot"></span>
        {isActive
          ? "Student is currently active."
          : "Student is currently inactive."}
      </div>

      {/* StudentInfo — only shown when showDetails is true */}
      {showDetails && (
        <StudentInfo
          studentId={studentId}
          department={department}
          email={email}
          phone={phone}
        />
      )}

    </div>
  );
};

export default StudentProfile;

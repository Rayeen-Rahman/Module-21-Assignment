// StudentInfo component — receives student details as props and displays them
const StudentInfo = ({ studentId, department, email, phone }) => {
  return (
    <div className="student-info">
      <div className="info-grid">
        <div className="info-item">
          <label>Student ID</label>
          <p>{studentId}</p>
        </div>
        <div className="info-item">
          <label>Department</label>
          <p>{department}</p>
        </div>
        <div className="info-item">
          <label>Email Address</label>
          <p>{email}</p>
        </div>
        <div className="info-item">
          <label>Phone Number</label>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;

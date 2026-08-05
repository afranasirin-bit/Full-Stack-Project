import "../styles/ApplyLeave.css";
import Navbar from "../components/Navbar";

function ApplyLeave() {
  return (
    <>
      <Navbar />

      <div className="apply-container">
        <div className="apply-form">
          <h1>Apply Leave</h1>

          <select>
            <option>Casual Leave</option>
            <option>Medical Leave</option>
            <option>Earned Leave</option>
          </select>

          <input type="date" />

          <input type="date" />

          <textarea placeholder="Reason"></textarea>

          <button>Submit Leave</button>
        </div>
      </div>
    </>
  );
}

export default ApplyLeave;
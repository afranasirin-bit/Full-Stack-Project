import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import LeaveBalance from "../components/LeaveBalance";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Welcome Employee 👋</h1>

        <LeaveBalance />
      </div>
    </>
  );
}

export default Dashboard;
import "../styles/LeaveCard.css";

function LeaveCard({ title, days }) {
  return (
    <div className="leave-card">
      <h3>{title}</h3>
      <h2>{days} Days</h2>
    </div>
  );
}

export default LeaveCard;
import LeaveCard from "./LeaveCard";

function LeaveBalance() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <LeaveCard title="Casual Leave" days={10} />
      <LeaveCard title="Medical Leave" days={15} />
      <LeaveCard title="Earned Leave" days={12} />
    </div>
  );
}

export default LeaveBalance;
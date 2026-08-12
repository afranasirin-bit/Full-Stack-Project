import "../styles/TaskFilter.css";

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="filter-box">

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Tasks</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

    </div>
  );
}

export default TaskFilter;
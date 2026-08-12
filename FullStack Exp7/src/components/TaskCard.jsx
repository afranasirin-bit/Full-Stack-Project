import {
  FaTrashAlt,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/TaskCard.css";

function TaskCard({ task, changeStatus, deleteTask }) {

  const getIcon = () => {
    switch (task.status) {
      case "Pending":
        return <FaClock />;

      case "In Progress":
        return <FaSpinner />;

      case "Completed":
        return <FaCheckCircle />;

      default:
        return <FaClock />;
    }
  };

  return (

    <div className="task-card">

      <div className="task-top">

        <div>

          <h3>{task.title}</h3>

          <span
            className={`status ${task.status
              .replace(" ", "")
              .toLowerCase()}`}
          >
            {getIcon()} {task.status}
          </span>

        </div>

      </div>

      <div className="task-actions">

        <select
          value={task.status}
          onChange={(e) =>
            changeStatus(task.id, e.target.value)
          }
        >
          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrashAlt />
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskCard;
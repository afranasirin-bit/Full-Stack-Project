import TaskCard from "./TaskCard";
import "../styles/TaskList.css";

function TaskList({ tasks, changeStatus, deleteTask }) {
  return (
    <div className="task-section">

      <div className="task-header">
        <h2>Project Tasks</h2>
        <span>{tasks.length} Tasks</span>
      </div>

      <div className="task-list">

        {tasks.length === 0 ? (
          <div className="empty-state">
            <h3>No Tasks Available</h3>
            <p>Add a new task to get started.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default TaskList;
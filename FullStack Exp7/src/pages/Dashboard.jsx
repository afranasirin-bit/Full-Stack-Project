import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import TaskFilter from "../components/TaskFilter";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Login Page",
      status: "Pending",
    },
    {
      id: 2,
      title: "Develop Dashboard",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Deploy Project",
      status: "Completed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Add Task
  const addTask = (title, priority, dueDate) => {
  if (!title.trim()) return;

  const newTask = {
    id: Date.now(),
    title,
    priority,
    dueDate,
    status: "Pending",
  };

  setTasks([...tasks, newTask]);
};

  // Change Status
  const changeStatus = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Statistics
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>Project Overview</h1>
          <p>
            Track your project progress and manage tasks efficiently.
          </p>
        </div>

        {/* Statistics */}

        <div className="stats">

          <div className="stat-card total">
            <h2>{total}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card pending">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card progress">
            <h2>{progress}</h2>
            <p>In Progress</p>
          </div>

          <div className="stat-card completed">
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>

        </div>

        {/* Add Task */}

        <TaskForm addTask={addTask} />

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Filter */}

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        {/* Task List */}

        <TaskList
          tasks={filteredTasks}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />

      </div>
    </>
  );
}

export default Dashboard;
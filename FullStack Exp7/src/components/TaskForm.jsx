import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {

  const [title,setTitle]=useState("");
  const [priority,setPriority]=useState("Medium");
  const [dueDate,setDueDate]=useState("");

  const handleSubmit=(e)=>{

    e.preventDefault();

    if(title.trim()==="") return;

    addTask(title,priority,dueDate);

    setTitle("");
    setPriority("Medium");
    setDueDate("");
  };

  return(

<div className="task-form-container">

<h2>Add New Task</h2>

<form className="task-form" onSubmit={handleSubmit}>

<input
type="text"
placeholder="Task title..."
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<select
value={priority}
onChange={(e)=>setPriority(e.target.value)}
>

<option>High</option>
<option>Medium</option>
<option>Low</option>

</select>

<input
type="date"
value={dueDate}
onChange={(e)=>setDueDate(e.target.value)}
/>

<button type="submit">

<FaPlusCircle/>

Add Task

</button>

</form>

</div>

  );

}

export default TaskForm;
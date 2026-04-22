import React from "react";
import { useState, PropTypes, useEffect } from "react";
import TodoForm from "./TaskForm";

function TaskMangement() {
    const initialTasks = [
    { id: '1', title: 'Learn React', status: 'todo' },
    { id: '2', title: 'Build Todo App', status: 'in-progress' },
    { id: '3', title: 'Review PR', status: 'done' },
    ];

    const [task,setTask] = useState(initialTasks)
    const handleAddTask = (newTask) => {
        setTask([...task,newTask])
    }
   useEffect(() => {
        console.log(task);
    }, [task]);

    const deleteTask = (id) => {
        setTask(prev=> prev.filter(x=> x.id !== id))
    }

    const [status,setStatus] = useState('all')
    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    }
    const filtered= task.filter(x=> {
        if (status === 'all') return true;
        return x.status === status
    })

    return (
        <div>
            <TodoForm  onAddTask={handleAddTask} />
            <label>Filter</label><span>   </span>
            <select value={status} onChange={handleChangeStatus}>
                <option value="all">All</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progess</option>
                <option value="done">Done</option>
            </select>
            <ol>
                {filtered.map(task => <li key={task.id}>{`${task.title} - ${task.status}`} <button onClick={() => deleteTask(task.id)}>Delete</button> </li>)}
                
            </ol>
        </div>
    )
}
export default TaskMangement;
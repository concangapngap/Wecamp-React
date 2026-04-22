import React from "react";
import { useState, PropTypes } from "react";

function TodoForm({ onAddTask }) {
    const [title,setTitle] = useState('')
    const [count,setCount] = useState(3)
    const [status,setStatus] = useState('todo')

    const handleSubmit=(e) => {
        e.preventDefault();
        if (!(title.trim())) return;
        const newId=count +1
        setCount(newId)
        const newTask = {
            id:`${newId}`,
            title,
            status,
        }
        onAddTask(newTask);
    }
    const handleChangeStatus=(e) => {
        setStatus(e.target.value)
    }
    const handleChangeTitle=(e) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title</label> <span>   </span>
                    <input id="title" type="text" onChange={handleChangeTitle}></input>
                </p>
                <p>
                    <label>Status</label><span>   </span>
                    <select value={status} onChange={handleChangeStatus}>
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progess</option>
                        <option value="done">Done</option>
                    </select>
                </p>
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}
export default TodoForm;
import React from 'react'
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Todo.css"
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? 'completed':""}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}
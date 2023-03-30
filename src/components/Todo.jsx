import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleComplete,deleteTodo }) => {
    return (
        <div className='todo'>
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
        </div>
    )
}

export default Todo
import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        // add new task
        addTodo(value)
        setValue('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Cmon add new task' onChange={handleChange} value={value} />
            <button type='submit' className='todo-btn'>Add</button>
        </form>
    )
}

export default TodoForm
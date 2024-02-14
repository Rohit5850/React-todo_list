import React, { useState } from 'react'
import TodoApp from './TodoApp'

function TodoForm() {

    const [todos,setTodos] = useState([]);

const addTodo =(data)=> {
    setTodos([...todos, {task : data}])

    console.log("Todos list :- ", todos)
    console.log("Todos data :- ", data)
}
    

  return (
    <div className='todo_form'>
    
     <TodoApp getTodo= { addTodo } />
                  
    </div>
  )
}

export default TodoForm
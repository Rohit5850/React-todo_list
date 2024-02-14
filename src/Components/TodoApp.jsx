import React, { useState } from 'react'
import Todo from './Todo';

function TodoApp( {getTodo}) {

   

    const [inptText,setInptTodo] = useState("");
   
    const formSubmit = (e)=>{
        e.preventDefault();

        getTodo(inptText);
       
        console.log(inptText);
 
     }

  return (
    <div className='todo_app'>
    <div className='todo_main_box'>
    <h1>Get Things Done!</h1>

    <form action='' onSubmit={(e)=>formSubmit(e)}>
    <input type='text' placeholder='What is the task today?' value={inptText} onChange={(e)=> setInptTodo(e.target.value) }/>
    <button className='form_btn'>Add Task</button>
    </form>
   
    <Todo/>
  
    </div>
     
   
    </div>
  )
}

export default TodoApp
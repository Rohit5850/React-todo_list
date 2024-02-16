import React, { useState } from 'react'

function TodoApp( {getTodo}) {

    const [inptText,setInptTodo] = useState("");
    const [err,setErr] = useState("")
   
    const formSubmit = (e)=>{
        e.preventDefault();
        
        inptText == '' ? setErr("Enter Some Data ....") : getTodo(inptText);
       
        setInptTodo('');
        
        setTimeout(()=>{
          setErr('')
        },1000)
    
     }

  return (
    <div className='todo_app'>
    <div className=''>
    <h1>Get Things Done!</h1>
       <p className='error'>{err}</p>
    <form action='' onSubmit={(e)=>formSubmit(e)}>
    <input type='text' placeholder='What is the task today?' value={inptText} onChange={(e)=> setInptTodo(e.target.value) }/>
    <button className='form_btn'>Add Task</button>
    </form>
   
    
  
    </div>
     
   
    </div>
  )
}

export default TodoApp
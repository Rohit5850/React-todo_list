import React, { useState } from 'react'
import TodoApp from './TodoApp'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

function TodoForm() {

    const [todos,setTodos] = useState([]);

const addTodo =(data)=> {
    setTodos([...todos, {task: data, id:uuidv4() , isEditing:false}])
      
    console.log("Todo ---  ",todos);
    
    console.log("Data :- ", data)
    // console.log("Todos data :- ", data)
}

const dataDelete = (id) => {

  console.log("ID :- ", id )
  
  console.log("Delete is clicked !");

  setTodos(todos.filter( delTo => delTo.id != id));
}

const editData = (id) =>{
  console.log('Editing is happning' , id);
}



  return (
    <div className='todo_form todo_main_box'>
    
     <TodoApp getTodo= { addTodo } />

    
     
    { todos.map((value,index) => (
      <Todo  key={index} inptTodoData={value} deleteTodo={dataDelete} editTodo={editData} />  
     )

     )}
           
    </div>
  )
}

export default TodoForm
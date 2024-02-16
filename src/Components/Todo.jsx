import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Todo( {inptTodoData, deleteTodo , editTodo} ) {
  return (
    <div className='Todo_Data'>
          <p>{inptTodoData.task}</p>
          <div className='option_icon'>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(inptTodoData.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(inptTodoData.id)} />
          </div>
    </div>
  )
}

export default Todo;

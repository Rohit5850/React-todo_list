import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Todo() {
  return (
    <div className='Todo_Data'>
          <p>Go to School </p>
          <div className='option_icon'>
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrash} />
          </div>
    </div>
  )
}

export default Todo

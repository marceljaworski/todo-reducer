import React from 'react'
import { ACTIONS } from './App.jsx'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
        <span style={{ color: todo.complete ? '#000' : '#C2C2C2'}}>
            {todo.name}
        </span>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Done</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>

    </div>
  )
}

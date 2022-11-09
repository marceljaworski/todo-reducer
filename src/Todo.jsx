import React from 'react'
import { ACTIONS } from './App.jsx'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
        <h2 style={{ color: todo.complete ? '#000' : '#C2C2C2'}}>
            {todo.name}
        </h2>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Done</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
    </div>
  )
}

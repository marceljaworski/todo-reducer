import React, { useReducer, useState } from 'react';

import './App.css';
import Todo from './Todo.jsx'
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload.name), ...todos]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id )
    default:
      return todos
  }

}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
    setName('')
  }
  
  console.log(todos)
  return (
    <div className="App">
     <h1>to do</h1>
     <>
      <form onSubmit={handleSubmit}>
        <input  placeholder="new Task" type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
     </>       
    </div>
  )
}

export default App

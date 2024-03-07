import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

export const Todo = () => {
  const todos=  useSelector(state=>state.todos)
console.log(todos)
  return (
    <>
    <div>Todo</div>
    {todos.map((item)=>
    {
    return(
        <div key={todos.id}>

        <li>{item.todo}</li>
        </div>
    )
    }
      )}
    </>
  )
}

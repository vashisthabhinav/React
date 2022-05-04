import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let styling = {
    minHeight : "70vh",
    margin : "30px auto"
  }
  return (
    <div className = "container" style = {styling}>
      <h3 className = "my-3">Todos List</h3>

      {/* When all the todos have been deleted, then we will send a message that all the items have been deleted. */}
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo)=>{
          return( 
          <>
          <TodoItem todo={todo} key = {todo.sno} onDelete = {props.onDelete}/> 
           {/* Whenever we use map method in any UI to render an array
           (like in this case we are doing it with the help of props.todos)
           We have to pass a unique key  */}

          <hr/>
          </>
          ) 
      })
        }
    </div>
  )
}

import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick = {()=>{onDelete(todo)}}>

        {/* We will not call a function like this-
            onClick = {onDelete(todo)}
            As it will be called during rendering because of the use of parantheses. 

            Instead we will use an Arrow function.
            We want to pass a function instead of calling it during runtime, so we made another function (which we will pass) in which we added the function call.
        */}
        Delete
      </button>
    </div>
  )
}

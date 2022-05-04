import './App.css';

import Header from "./MyComponents/Header";
// There is a consept in JavaScript of named export and default export.
// Here, we are doing defualt export so no {} are required for 'Header'

import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState, useEffect } from 'react';
// Whenever we use the updater of  useState Hook (for ex, setTodos), it does not immidiately change the todos.
// So, what happens that if we use localStorage command just after setTodo, it may happen that the todos have not been updated till then.
// Due to this reason, we use UseEffect Hook. NOw passing useEffect Hook as well.

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

    // onDelete Method
    const onDelete = (todo) => {
      console.log("I am onDelete of todo", todo)
  
      // let index = todos.indexOf(todo);
      // todos.splice(index,1);
      // The above commented statements used for deleting does not work for React.
  
      // Now using setTodos Hook
  
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("deleted", todos)
      localStorage.setItem("todos", JSON.stringify(todos));//Setting item in local storage on adding a newTodo.
  
  
    }

    
  // AddTodo Function
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;//We want the sno of the newTodo so that will be the sno of the existing todo plus one.
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    //Adding new todo into the existing list
    setTodos([...todos, myTodo]);
    // '...' is an array
    console.log(myTodo);

    // localStorage.setItem("todos", JSON.stringify(todos));

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])




  // const [todos, setTodos] = useState([

  //   // UseState Hook
  //   //    A Hook is a special function that lets you “hook into” React features. 
  //   //    useState is a Hook that lets you add React state to function components
  //   // {
  //   //   sno: 1,
  //   //   title: "Going to the library",
  //   //   desc: "I have to go to the market to study for my end semester exams."
  //   // },
  //   // {
  //   //   sno: 2,
  //   //   title: "Going to the department",
  //   //   desc: "I have to go to the department to submit the assignments."
  //   // },
  //   // {
  //   //   sno: 3,
  //   //   title: "Going to the market",
  //   //   desc: "I have to go to the market to buy varoius accessories."
  //   // }


  //   //Now passing initTodo
  //   initTodo
  // ]);

  
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])
  // // The above three lines say that whenever todos is changed, localStorage method will be called.



  // let myVar = 57;
  return (

    // This language is JSX- JavaScript Syntax Extension 

    // <div className="App">
    //   <header className="App-header">
    //     <div>{myVar}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header title="MyTodosList" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
    //Empty opening'<>' and closing tags'</>' are important whenever you return anything
  );
}
export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import Todo from './Components/Todo.jsx';
import CreateTodo from './Components/CreateTodo.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect( () => {
    axios.get("http://localhost:8080/api/todos").then( (res) => {
      setTodos(res.data)
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setError("failed to fetch data");
      setLoading(false);
    })
  }, [])
  return (
    <>
      <CreateTodo />
      <Todo  todos={todos}/>
            <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
export default App

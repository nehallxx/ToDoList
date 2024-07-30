import React, { useEffect, useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosVal, setTodosVal] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify(newList));
  }

  function AddTodos(newTodos) {
    const newTodosList = [...todos, newTodos];
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function deleteTodos(index) {
    const newTodosList = todos.filter((_, todosIndex) => todosIndex !== index);
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function editTodos(index) {
    const ToEditVal = todos[index];
    setTodosVal(ToEditVal);
    deleteTodos(index);
  }
  
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <>
      <TodoInput todosVal={todosVal} AddTodos={AddTodos} setTodosVal={setTodosVal} />
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos={todos} />
    </>
  );
}

export default App;

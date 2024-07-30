import React, { useState } from 'react';

export default function TodoInput(props) {
    const {AddTodos,todosVal, setTodosVal}=props;
  return (
    <header>
      <input value={todosVal} onChange={(e) =>setTodosVal(e.target.value) }
       placeholder='Add A Task' />
      <button onClick={() => {
        AddTodos(todosVal)
        setTodosVal('')
        }}>
        Add
      </button>
    </header>
  );
}

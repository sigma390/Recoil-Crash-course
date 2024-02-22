import React from 'react'
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoSate';
import { useState } from 'react';
import { Todo } from './Todo';
const Todos = () => {
  const [todos,setTodos] = useRecoilState(todoState);
  const [inputText,setInput]=useState('')
  function addTodo(){
    setTodos((prevTodos)=>[...prevTodos,
      {id:Math.random(),text:inputText}])
    setInput('');
  }

  function handleInput(e){
     setInput(e.target.value);
  }
  function ClearTodos(){
    setTodos([]);
  }
  return (

    <main>
        <input value={inputText} onChange={handleInput}
         type="text" id='todoInput' />
        <button onClick={addTodo}>Add</button>
        <button onClick={ClearTodos}>Delete</button>
        {
          todos.map((todo)=>{
            return (
              <Todo text={todo.text} id={todo.id} key={todo.id} />
            )
          })
        }
    </main>
  )
}

export default Todos;
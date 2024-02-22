import React from 'react'
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoSate';
import { useState } from 'react';
const Todos = () => {
  const [todos,setTodos] = useRecoilState(todoState);
  const [inputText,setInput]=useState('')
  function addTodo(){
    setTodos((prevTodos)=>[...prevTodos,
      {id:Math.random(),text:inputText}])
  }

  function handleInput(e){
     setInput(e.target.value);
  }
  console.log(inputText)


  return (

    <main>
        <input value={inputText} onChange={handleInput}
         type="text" id='todoInput' />
        <button>Add</button>
        <button>Delete</button>
    </main>
  )
}

export default Todos;
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { todoState } from '../state/atoms/TodoSate'

export const Todo = ({text,id}) => {
    const setTodos = useSetRecoilState(todoState)
    function deleteTodo(){
        setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id != id)
        })
    }
  return (
    <div>
        <p>{text}</p>
        <button onClick={deleteTodo}>Remove</button>

        

    </div>
  )
}

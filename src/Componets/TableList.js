import React, { useEffect, useState } from 'react';
import AddNewTodo from './AddNewTodo';
const TableList =()=>{
 const [todos,setTodos]=    useState([
        {text:'Pay Bills',id:1 },
        {text:'Do your Homework',id:2},
        {text:'Feed the Dog',id:3}
    ]);
    const [count,setCount] =useState(0);
    const addTodo=(text)=>{
        setTodos([
            ...todos,
            {text,id:Math.random()}
        ]);
    };
    useEffect(()=>{
    console.log('use effect',todos);
    });
    return (
        <div>
        <ul>
            {/* <li>Pay Bills</li>
            <li>Do your Homework</li>
            <li>Feed the Dog</li> */}
            {todos.map((todo)=>{
                return(
                    <li key={todo.id}>{todo.text}</li>
                )
            }
            )}
        </ul>
        <AddNewTodo addTodo={addTodo}/>
        {/* <button onClick={addTodo}>Add a todo</button> */}
        <button onClick={()=>setCount(count+1)}>Score:{count}</button>
        </div>
    )
}
export default TableList;
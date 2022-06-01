import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import {TodoListContext} from '../Contexts/TodoListContext';
const Todo =()=>{
   const [todo,setTodo] =useState('');
    const {todos,dispatch}= useContext(TodoListContext);
    const {isDarkTheme,lightTheme,darkTheme,changeTheme}=useContext(ThemeContext);
    const theme =isDarkTheme ? darkTheme:lightTheme;
    const handlechange=(e)=>{
        setTodo(e.target.value);

    };
    const handleFormSubmit=(e)=>{
            e.preventDefault();
            // addTodo(todo);
            dispatch({type:'ADD_TODO',text:todo})
    };
    const handleRemove=(e)=>{
        const id= e.target.id;
    // removeTodo(id);
    dispatch({type:'REMOVE_TODO',id})
    };
        return(
            <div style={{background:theme.background,color:theme.text,textAlign:'center'}}>
                { todos.length?(todos.map((todo)=>{
                    return <p id={todo.id} onClick={handleRemove} key={todo.id} className='item'>{todo.text}</p>
                })
        ):(
            <div>you have no todos</div>
        )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo'>Add todo:</label>
                <input type="text" id="todo" onChange={handlechange}></input>
                <button  value="" type="submit" className='ui button primary'>add new todo</button>
            </form>
    
            <button className='ui button primary' onClick={changeTheme}>change the theme</button>
            </div>
        );
}

export default Todo;
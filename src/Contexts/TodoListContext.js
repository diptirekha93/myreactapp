import React ,{createContext,useReducer,useState} from "react";
import { todosReducer } from "../reducers/todoReducer";
export const TodoListContext=createContext();

 const TodoListContextprovider=({children})=>{
  const [todos,dispatch]=   useReducer(todosReducer,[
        {text:'plan the family trip',id:1},
        {text:'Go hopping for dinner',id:2},
        {text:'go for walk',id:3}
    ]);
//   const[todos,setTodos]=  useState([
//         {text:'plan the family trip',id:1},
//         {text:'Go hopping for dinner',id:2},
//         {text:'go for walk',id:3}
//     ]);
    // const addTodo=(todo)=>{
    //     setTodos([
    //        ...todos,
    //        {text:todo,id:Math.random()}
    //     ]);
    // };
    // const removeTodo=(id)=>{
    //     setTodos(todos.filter((todo)=>{
    //     return todo.id!=Number(id);
    //     }));
    //     }
    return(
        <TodoListContext.Provider value={{todos,dispatch}}>
            {children}

        </TodoListContext.Provider>
    )

};
export default TodoListContextprovider;

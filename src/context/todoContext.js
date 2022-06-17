import { createContext, useState} from "react";
import uuid from 'react-uuid'
const todoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos]= useState([{id: '1', text: 'This should be done', complete:false}]);
    const [todoEdit, setTodoEdit]= useState({
        edit: false,
        todo: {}
    })


    const addTodo=(newTodo)=>{
        newTodo.id = uuid()
        newTodo.complete=false
        setTodos([newTodo, ...todos])
    }

    const updateTodo =(newUpdateTodo, id)=>{
        setTodos(todos.map(todo=>todo.id === id? {...todo, ...newUpdateTodo}: todo));
    }

    const completeTodo = (newCompletedtodo)=>{
        newCompletedtodo.complete = true;
        setTodos(todos.map(todo=>todo.id===newCompletedtodo.id? {...todo, ...newCompletedtodo}: todo))
    }

    const deleteTodo = (newDeletedTodo)=>{
        setTodos(todos.filter(todo=>todo.id!==newDeletedTodo.id));

    }
    
    const editTodo = (newEditTodo) =>{
        setTodoEdit({
            edit: true,
            todo: {...newEditTodo}
        })
    } 
    return <todoContext.Provider
        value={{
            todos,
            addTodo,
            completeTodo,
            deleteTodo,
            editTodo,
            updateTodo,
            todoEdit,
            setTodoEdit
        }}
    >
        {children}
    </todoContext.Provider>

}
export default todoContext;
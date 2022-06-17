import { Box, styled } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import todoContext from '../context/todoContext';

const SearchBox = styled('input')(({ theme }) => ({
    width: '400px',
    height: '30px',
    border: 'none',
    '&:focus': {
        outline: 'none'
    },
}))
const SerBoxContainer = styled(Box)(({ theme }) => ({
    border: '1px solid black',
    width: '500px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '5px',
    borderRadius: '10px'
}))

const TodoForm = () => {
    const {addTodo, setTodoEdit, todoEdit, updateTodo} = useContext(todoContext)
    const [text, setText] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true)

    const handleInputChange = (event)=>{
        setText(event.target.value);
        if(text.trim().length>=10){
            setButtonDisable(false)
        }
    }
    useEffect(()=>{
        if(todoEdit.edit){

            setText(todoEdit.todo.text);
            setButtonDisable(false)
        }
    }, [todoEdit])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            text
        }
        if(todoEdit.edit){
            updateTodo(newTodo, todoEdit.todo.id);
            setTodoEdit( todoEdit.edit=false)

        }else{
            addTodo(newTodo);
        }
        
        setButtonDisable(true);
        setText('');

        
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SerBoxContainer>
                <form onSubmit={handleFormSubmit}>
                    <Button type='submit' disabled={buttonDisable}>
                        <AddCircleIcon />
                    </Button>
                    <SearchBox 
                        placeholder='Add task' 
                        onChange={handleInputChange} 
                        value={text} 
                    />
                </form>
            </SerBoxContainer>
        </Box>
    );
};

export default TodoForm;
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import todoContext from '../context/todoContext';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
    const { todos, completeTodo, deleteTodo, editTodo } = useContext(todoContext)
    let incompleteTask = 0
    todos.forEach(({ complete }) => !complete && incompleteTask++)
    return (
        <Box component='div'>
            <Typography variant='h6'>Total task: {incompleteTask}</Typography>
            {
                todos.map((todo) => !todo.complete && (
                    <Paper key={todo.id} elevation={6} sx={{ p: '20px', mt: '20px' }}>
                        <Stack direction='row' alignItems='center' justifyContent= 'space-between'>
                            <Stack direction='row' alignItems='center'>
                                <Checkbox checked={todo.complete} onChange={() => completeTodo(todo)} />
                                <Typography variant='h6'>{todo.text}</Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <IconButton onClick={()=>editTodo(todo)}><EditIcon></EditIcon></IconButton>
                                <IconButton onClick={()=>deleteTodo(todo)}><DeleteIcon /></IconButton>
                            </Stack>
                        </Stack>
                    </Paper>
                )
                )
            }
        </Box>
    );
};

export default TodoList;
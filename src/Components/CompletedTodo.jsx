import { Checkbox, IconButton, Paper, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import todoContext from '../context/todoContext';
import DeleteIcon from '@mui/icons-material/Delete';

const CompletedTodo = () => {
    const { todos, deleteTodo } = useContext(todoContext)
    return (
        <div>
            <Typography variant='h6'>Completed Todos:</Typography>
            {
                todos.map((todo, i) => todo.complete && (
                    <Paper key={i} elevation={6} sx={{ p: '20px', mt: '20px' }}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Stack direction='row' alignItems='center'>
                                <Checkbox checked={todo.complete} />
                                <Typography variant='h6'><del>{todo.text}</del></Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <IconButton onClick={() => deleteTodo(todo)}><DeleteIcon /></IconButton>
                            </Stack>
                        </Stack>
                    </Paper>
                )
                )
            }
        </div>
    );
};

export default CompletedTodo;
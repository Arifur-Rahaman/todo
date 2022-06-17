import React from 'react';
import Grid from '@mui/material/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CompletedTodo from './CompletedTodo';
import { Container } from '@mui/material';
const Home = () => {
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TodoForm />
                </Grid>
                <Grid item xs={12}>
                    <TodoList />
                </Grid>

                <Grid item xs={12}>
                    <CompletedTodo />
                </Grid>

            </Grid>
        </Container>

    );
};

export default Home;
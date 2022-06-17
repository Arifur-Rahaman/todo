import React from 'react';
import Home from './Components/Home';
import {TodoProvider} from './context/todoContext'
const App = () => {
    return (
        <TodoProvider>
            <Home/>
        </TodoProvider>
    );
};

export default App;
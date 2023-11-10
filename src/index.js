import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ToDoList from './ToDoList/ToDoList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        {/* <ToDoList /> */}
    </React.StrictMode>
);
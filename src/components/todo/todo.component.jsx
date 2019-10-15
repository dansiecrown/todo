import React from 'react';
import './todo.css';

const Todo = () => (
    <div className="container">
        <h2 className="todo">Todo</h2>
        <div className="todo-body">
            <span className="todo-title">Item 1</span>
            <div className="todo-description">
                Description
            </div>
        </div>
    </div>
);


export default Todo;
import React from 'react';
import Todo from '../components/todo/todo.component';
import Done from '../components/current/current.component';
import Current from '../components/done/done.component';
import './todo-list.css';

const TodoList = () => (
    <div className="todo-list">
        <Todo/>
        <Done/>
        <Current/>
        
    
    </div>
);


export default TodoList;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';



import './todo.css';


    

class Todo extends React.Component{
    render(props){


        const todos = this.props.todo;
        const items = []
        for (const [index, value] of todos.entries()){
            items.push(<li key={index}>
                 {value} <br/>
                 <button><FontAwesomeIcon icon={faClock} /></button>
                 <button><FontAwesomeIcon icon={faCheckCircle} /></button>
                 <button><FontAwesomeIcon icon={faTrash} /></button></li>)
        }

        return(
                <div className="container">
                    <h2 className="todo">Todo <FontAwesomeIcon icon={faUserEdit}/></h2>
                    <div className="todo-body">
                       
                        <ul>
                            {items}
                        </ul>
                    </div>
                </div>
        );
    }
 
};


export default Todo;
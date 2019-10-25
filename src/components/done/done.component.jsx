import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

import './done.css';

class Done extends React.Component{
    render(props){


        


        const done = this.props.done;
        const items = []
        for (const [index, value] of done.entries()){
            items.push(<li key={index}>
                 {value} <br/>
                 <button><FontAwesomeIcon icon={faClock} /></button>
                 <button><FontAwesomeIcon icon={faCheckCircle} /></button>
                 <button><FontAwesomeIcon icon={faTrash} /></button></li>)
                 console.log(items)
        }

            return(
            <div className="container">
                <h2 className="done">Done <FontAwesomeIcon icon={faCheckCircle}/></h2>
                <div className="todo-body">
                    <span className="todo-title">{items}</span>
                    
                        
                    
                </div>
            </div>
        )
    }
};


export default Done;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

import './current.css';

class Current extends React.Component{



    render(props){
        
        

        const curr = this.props.current;
        const items = []

        // console.log(curr);
        for (const [index, value] of curr.entries()){
            // var i = curr.indexOf()
            items.push(<li key={index}>
                 {value} <br/>
                 
                 <button onClick={moveToDone}  ><FontAwesomeIcon icon={faCheckCircle} /></button>
                 <button><FontAwesomeIcon icon={faTrash} /></button></li>)
                
                
    }
    return(

    )
    }

};


export default Current;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';

import './todo-list.css';





  
class TodoList extends React.Component{

constructor(props){
    super(props)

    this.state = {
        todo: [
        
        ],
        current: [

        ],
        done: [
          
        ]
    }
        this.enterKey= this.enterKey.bind(this);
        
}



//INPUT FUNCTION FOR THE TODO SECTION
    enterKey = (e) => {
 
        var val = e.target.value;
        
        if (e.key === "Enter"){
            if(val ===  ""){
                alert("Please write an Item")
            }else{
                this.setState({todo: [val, ...this.state.todo]})
                e.target.value = null
            }
        }
        
    }

 
    //DELETE FUNCTIONS FOR THE THREE DIFFERENT SECTIONS   

    delete = (index) => {
        const todo = this.state.todo;
        // const sItem = curr.splice(index, index + 1);
        todo.splice(index, index + 1)  
        this.setState({})    
        }
    cDelete = (index) => {
        const todo = this.state.current;
        // const sItem = curr.splice(index, index + 1);
        todo.splice(index, index + 1)  
        this.setState({})    
        }
    dDelete = (index) => {
        const todo = this.state.done;
        // const sItem = curr.splice(index, index + 1);
        todo.splice(index, index + 1)  
        this.setState({})    
        }

//MOVE TO CURRENT FUNCTIONS FOR THE THREE SECTIONS

    tMoveToCurrent = (index) => {
        const todo = this.state.todo;
        const curr = this.state.current;
        const copy = todo.splice(index, index + 1);
        var copied = copy[0]

        alert("You Item has been moved to your CURRENT list")
        curr.unshift(copied);
        this.setState({})
    }

    dMoveToCurrent = (index) => {

        
        const done = this.state.done;
        const curr = this.state.current;
        const copy = done.splice(index, index + 1);
        var copied = copy[0]

        alert("You Item has been moved to your CURRENT list")
        curr.unshift(copied);
        this.setState({})
    }

//MOVE TO DONE FUNCTION FOR THE SECTIONS
    cMoveToDone = (index) => {

            
        const done = this.state.done;
        const curr = this.state.current;
        const copy = curr.splice(index, index + 1);
        var copied = copy[0]

        alert("You Item has been moved to your DONE list")
        done.unshift(copied);
        this.setState({})
    }


    render(props){
        
        const todo = this.state.todo;
        const tItems = []
        for (const [index, value] of todo.entries()){
            tItems.push(<li key={index}>
                 {value} <br/>
                 <button onClick={this.tMoveToCurrent.bind(this, index)}><FontAwesomeIcon icon={faClock} /></button>
                 
                 <button onClick={this.delete.bind(this, index)}><FontAwesomeIcon icon={faTrash} /></button></li>)
         
        }

        const curr = this.state.current;
        const cItems = []
        for (const [index, value] of curr.entries()){
            cItems.push(<li key={index}>
                 {value} <br/>
                 <button onClick={this.cMoveToDone.bind(this, index)}><FontAwesomeIcon icon={faCheckCircle} /></button>
                 <button onClick={this.cDelete.bind(this, index)}><FontAwesomeIcon icon={faTrash} /></button></li>)
                
        }

        
        const done = this.state.done;
        const items = []
        for (const [index, value] of done.entries()){
            items.push(<li key={index}>
                 {value} <br/>
                 <button onClick={this.dMoveToCurrent.bind(this, index)}><FontAwesomeIcon icon={faClock} /></button>
                 
                 <button onClick={this.dDelete.bind(this, index)}><FontAwesomeIcon icon={faTrash} /></button></li>)
                
        }
    

            return(
            <div>
                <div className="input" >
                    <span  style={{display: 'block'}}>
                    Input a TODO Item to add to your list and then press Enter to include description.</span>
                    
                    <input type="text" name="item" className="item-enter" placeholder="Your TODO" onKeyDown={this.enterKey}/>
                </div>
                <div className="todo-list">
                         <div className="container">
                    <h2 className="todo">Todo <FontAwesomeIcon icon={faUserEdit}/></h2>
                    <div className="todo-body">
                       
                        <ul>
                            {tItems}
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <h2 className="current">Current <FontAwesomeIcon icon={faClock}/></h2>
                    <div className="todo-body">
                        <span className="todo-title">
                        {cItems}
                        </span>
                        <div className="todo-description">
                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="done">Done <FontAwesomeIcon icon={faCheckCircle}/></h2>
                    <div className="todo-body">
                        <span className="todo-title">{items}</span>
                        
                    </div>
                </div>
                

                

            </div>
            </div>
            ) 
        
        }
    
}


export default TodoList;
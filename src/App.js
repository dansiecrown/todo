import React from 'react';
import TodoList from './containers/todo-list.component';


import './App.css';

class App extends React.Component {


render(){
  
const rainbowClasses =
['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh' ];

// function change() {
//     document.body.style.background = 
//     rainbow[Math.floor(7*Math.random())];
// }

// TO CHANGE CLASS
function changeClass(){
    const currentClass = document.getElementById('theme').className
    let index = rainbowClasses.indexOf(currentClass)

   document.getElementById('theme').className = rainbowClasses[index + 1]
    
}
  
  return (
    <div className="App">
      <div className="second" id="theme">
         <button onClick={changeClass} id='button'className="myb" > 
         
         Background
         <span className='mybtext'>Click here to change the background</span></button>
         
         <hr/>
        <div>
            
          <span className="title">MY TODO</span>

        </div>
      <TodoList />
      </div>
    </div>
  );
}
}

export default App;

import React from 'react';
import TodoList from './containers/todo-list.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <hr/>
      <span className="title">MY TODO</span>
      <div className="input" >
        <span style={{display: 'block'}}>Input a TODO Item to add to your list.</span>
        <input type="text" className="item-enter" placeholder="Your TODO"/>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;

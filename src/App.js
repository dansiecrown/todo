import React from 'react';
import TodoList from './containers/todo-list.component';


import './App.css';

class App extends React.Component {


render(){
  
  
  return (
    <div className="App">

        <div>
            <hr/>
          <span className="title">MY TODO</span>

        </div>
      <TodoList />
    </div>
  );
}
}

export default App;

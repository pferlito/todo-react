import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  let state = {
    items: ['one','two'],
    filter: ""
  };
  let current_state;
  let setState;
  [current_state,setState] = useState(state);

  return (
    <section className="todoapp">
      <Header />
      <TodoList list={current_state}/>
      <Footer />
    </section>
  );
}

export default App;

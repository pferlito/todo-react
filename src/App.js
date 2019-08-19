import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

const handleAdd = () => {
};
const handleChange = () => {
};
const handleDestroy = () => {
};

function App() {
  let state = {
    itemsList: [{text: 'one', state: 'active'}, {text: 'two', state: 'active'}],
    filter: ""
  };
  const [current_state, setState] = useState(state);

  return (
    <section className="todoapp">
      <Header handleAdd={handleAdd}
      />
      <TodoList list={current_state}
                handleChange={handleChange}
                handleDestroy={handleDestroy}
      />
      <Footer/>
    </section>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';


const handleChange = () => {
};

const handleToggleAll = () => {
};

function App() {
  /**
   * Add an element.
   * @param value
   */
  const handleAdd = (value) => {
    const newState = {...currentState};
    newState.itemsList.push({text: value, state: 'active'});
    setState(newState);
  };
  /**
   * Remove an element.
   * @param index
   */
  const handleDestroy = (index) => {
    debugger;
    const newState = {...currentState};
    newState.itemsList.splice(index, 1);
    setState(newState);
  };
  const initialState = {
    itemsList: [{text: 'one', state: 'active'}, {text: 'two', state: 'active'}],
    filter: ""
  };
  const [currentState, setState] = useState(initialState);

  let activeCount = 0;
  let completedCount = 0;
  currentState.itemsList.forEach((el) => {
    if (el.state === 'active') {
      activeCount++;
    } else {
      completedCount++;
    }
  });

  return (
    <section className="todoapp">
      <Header handleAdd={handleAdd}/>
      <TodoList list={currentState}
                handleChange={handleChange}
                handleDestroy={handleDestroy}
                handleToggleAll={handleToggleAll}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
      />
    </section>
  );
}

export default App;

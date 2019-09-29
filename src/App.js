import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';


function App() {
  const initialState = {
    itemsList: [{text: 'one', state: 'active'}, {text: 'two', state: 'active'}],
    filter: ""
  };

  const [currentState, setState] = useState(initialState);

  // update counts
  let activeCount = 0;
  let completedCount = 0;
  currentState.itemsList.forEach((el) => {
    if (el.state === 'active') {
      activeCount++;
    } else {
      completedCount++;
    }
  });

  /**
   * Filter items.
   * @param value
   */
  function handleFilter(value) {
    console.log('in handleFilter');
    const newState = {...currentState};
    newState.filter = value;
    setState(newState);
  }
  /**
   * Add an element.
   * @param value
   */
  function handleAdd(value) {
    const newState = {...currentState};
    newState.itemsList.push({text: value, state: 'active'});
    setState(newState);
  }
  /**
   * Remove an element.
   * @param index
   */
  function handleDestroy(index) {
    const newState = {...currentState};
    newState.itemsList.splice(index, 1);
    setState(newState);
  }

  /**
   * Change element state: completed or active.
   * @param index
   */
  function handleStateChange(index) {
    const mutatedState = {...currentState};
    let newState;
    if (mutatedState.itemsList[index].state === 'active') {
      newState = 'completed';
    } else {
      newState = 'active';
    }
    mutatedState.itemsList[index].state = newState;
    setState(mutatedState);
  }

  /**
   * Handle toggle state for all elements.
   */
  function handleToggleAll() {
    const mutatedState = {...currentState};
    const foundActive = mutatedState.itemsList.some(function (el) {
      return el.state === 'active';
    });
    let newval = foundActive ? 'completed' : 'active';
    mutatedState.itemsList.forEach(function (el) {
      el.state = newval;
    });
    setState(mutatedState);
  }

  return (
    <section className="todoapp">
      <Header handleAdd={handleAdd}/>
      <TodoList state={currentState}
                handleStateChange={handleStateChange}
                handleDestroy={handleDestroy}
                handleToggleAll={handleToggleAll}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilter={handleFilter}
      />
    </section>
  );
}

export default App;

import React, {useState, useContext} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';
import TodoContext from './TodoContext';


function App() {
  const initialState = useContext(TodoContext);

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
   * @param value string
   */
  function handleFilter(value) {
    const newState = {...currentState};
    newState.filter = value;
    setState(newState);
  }

  /**
   * Add an element.
   * @param value string
   */
  function handleAdd(value) {
    const newState = {...currentState};
    newState.itemsList.push({text: value, state: 'active'});
    setState(newState);
  }

  /**
   * Remove an element.
   * @param index number
   */
  function handleDestroy(index) {
    const newState = {...currentState};
    newState.itemsList.splice(index, 1);
    setState(newState);
  }

  /**
   * Change element state: completed or active.
   * @param index number
   * @param newState string
   */
  function handleStateChange(index, newState) {
    const mutatedState = {...currentState};
    mutatedState.itemsList[index].state = newState;
    setState(mutatedState);
  }

  /**
   * Change element text value.
   * @param index number
   * @param newValue string
   */
  function handleTextChange(index, newValue) {
    const mutatedState = {...currentState};
    mutatedState.itemsList[index].text = newValue;
    setState(mutatedState);
  }

  /**
   * Handle clear of completed items.
   */
  function handleClear() {
    const mutatedState = {...currentState};
    mutatedState.itemsList = mutatedState.itemsList.filter((el) => el.state !== 'completed');
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
      <TodoContext.Provider value={currentState}>
        <TodoList
          handleTextChange={handleTextChange}
          handleStateChange={handleStateChange}
          handleDestroy={handleDestroy}
          handleToggleAll={handleToggleAll}
        />
      </TodoContext.Provider>
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        handleFilter={handleFilter}
        handleClear={handleClear}
      />
    </section>
  );
}

export default App;

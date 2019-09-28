import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{text: 'one', state: 'active'}, {text: 'two', state: 'active'}],
      filter: ""
    };
  }

  /**
   * Handle bulk toggling.
   */
  handleToggleAll = () => {
    const foundActive = this.state.items.some(function (el) {
      return el.state === 'active';
    });
    const mutatedState = [...this.state.items];
    let newval = foundActive ? 'completed' : 'active';
    mutatedState.forEach(function (el) {
      el.state = newval;
    });
    this.setState(mutatedState);
  };

  /**
   * Handle addition of new item.
   * @param value item text
   */
  handleAdd = (value) => {
    const mutatedState = {...this.state};
    mutatedState.items.push({text: value, state: 'active'});
    this.setState(mutatedState);
  };
  /**
   * Handle change in completion state.
   * @param index
   * @param newState
   */
  handleStateChange = (index, newState) => {
    const mutatedState = [...this.state.items];
    mutatedState[index].state = newState;
    this.setState(mutatedState);
  };
  /**
   * Handle change in text.
   * @param index
   * @param newText
   */
  handleTextChange = (index, newText) => {
    const mutatedState = [...this.state.items];
    mutatedState[index].text = newText;
    this.setState(mutatedState);
  };
  /**
   * Handle removal of item.
   * @param index
   */
  handleDestroy = (index) => {
    const mutatedState = {...this.state};
    mutatedState.items.splice(index, 1);
    this.setState(mutatedState);
  };
  /**
   * Handle filter selection.
   * @param mode
   */
  handleFilter = (mode) => {
    const mutatedState = {...this.state};
    mutatedState.filter = mode;
    this.setState(mutatedState);
  };

  /**
   * Handle clear of completed items.
   */
  handleClear = () => {
    const mutatedState = {...this.state};
    mutatedState.items = this.state.items.filter((el) => el.state !== 'completed');
    this.setState(mutatedState);
  };

  render() {
    // get count of active and completed items
    let activeCount = 0;
    let completedCount = 0;
    this.state.items.forEach((el) => {
      if (el.state === 'active') {
        activeCount++;
      } else {
        completedCount++;
      }
    });

    return (
      <section className="todoapp">
        <Header list={this.state}
                handleAdd={this.handleAdd}
        />
        <TodoList list={this.state}
                  handleStateChange={this.handleStateChange}
                  handleTextChange={this.handleTextChange}
                  handleDestroy={this.handleDestroy}
                  handleToggleAll={this.handleToggleAll}
        />
        <Footer list={this.state}
                handleFilter={this.handleFilter}
                handleClear={this.handleClear}
                activeCount={activeCount}
                completedCount={completedCount}
        />
      </section>
    )
  }
}

export default App;

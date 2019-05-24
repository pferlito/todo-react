import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  state = {
    items: [
      {text: 'one', state: 'completed'},
      {text: 'two', state: 'active'},
    ]
  };
  handleDestroy = (index) => {
    console.log(this.state);
    const mutatedItems = [...this.state.items];
    mutatedItems.splice(index,1);
    this.setState({items: mutatedItems});
    console.log(mutatedItems);
  };
  render() {
    return (
      <section className="todoapp">
        <Header/>
        <TodoList items={this.state.items} handleDestroy={this.handleDestroy} />
        <Footer/>
      </section>
    )
  }
}

export default App;

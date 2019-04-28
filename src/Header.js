import React, {Component} from 'react';

class Header extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="new-todo" placeholder="What needs to be done?"
                 autoFocus=""/>
        </form>
      </header>
    )
  }
}

export default Header;
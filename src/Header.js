import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleAdd = (e) => {
    e.preventDefault();
    const value = this.input.current.value;
    this.props.handleAdd(value);
    this.input.current.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleAdd}>
          <input className="new-todo" ref={this.input}
                 placeholder="What needs to be done?"
                 autoFocus=""/>
        </form>
      </header>
    )
  }
}

export default Header;

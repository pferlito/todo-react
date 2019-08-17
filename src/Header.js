import React from 'react';

function Header(props) {
  let textInput = null;

  const handleAdd = (e) => {
    console.log(e);
    console.log(textInput);
    e.preventDefault();
    const value = textInput.value;
    props.handleAdd(value);
    textInput.value = '';
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleAdd}>
        <input className="new-todo" ref={(input) => {
          textInput = input
        }}
               placeholder="What needs to be done?"
               autoFocus=""/>
      </form>
    </header>
  )
}

export default Header;
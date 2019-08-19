import React from 'react';

function Header({handleAdd}) {
  let textInput = null;

  const doAdd = (e) => {
    e.preventDefault();
    const value = textInput.value;
    handleAdd(value);
    textInput.value = '';
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={doAdd}>
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
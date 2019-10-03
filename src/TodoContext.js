import React from 'react';

const initialState = {
  itemsList: [{text: 'one', state: 'active'}, {text: 'two', state: 'active'}],
  filter: ""
};

const TodoContext = React.createContext(initialState);

export default TodoContext;
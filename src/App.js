import React from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <section className="todoapp">
      <Header />
      <TodoList/>
      <Footer />
    </section>
  );
}

export default App;

import React from 'react';

const Navbar = ({ onAddTodo }) => {
  return (
    <nav className="navbar">
      <h1 className="text-xl">TODO List</h1>
      <button onClick={onAddTodo}>+ Add</button>
    </nav>
  );
};

export default Navbar;

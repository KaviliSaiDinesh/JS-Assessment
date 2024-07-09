import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider, useTodos } from './context/TodoContext';
import './App.css';


const AppContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { addMutation, updateMutation } = useTodos();

  const handleAddTodo = () => {
    setSelectedTodo(null);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleSave = (todo) => {
    if (todo.id) {
      updateMutation.mutate(todo);
    } else {
      addMutation.mutate({ ...todo, id: Date.now() });
    }
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onAddTodo={handleAddTodo} />
      {isFormOpen && (
        <TodoForm 
          todo={selectedTodo} 
          onCancel={handleCancel} 
          onSave={handleSave} 
        />
      )}
      <TodoList onEdit={(todo) => {
        setSelectedTodo(todo);
        setIsFormOpen(true);
      }} />
    </div>
  );
};

const App = () => {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
};

export default App;

import React, { useState } from 'react';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm'; // Import TodoForm
import { useTodos } from '../context/TodoContext';

const TodoList = () => {
  const { todos, deleteMutation, addMutation, updateMutation } = useTodos();
  const [search, setSearch] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null); 
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEdit = (todo) => {
    setSelectedTodo(todo); 
    setIsFormOpen(true); 
  };

  const handleCancel = () => {
    setSelectedTodo(null); 
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

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4"> 
        <input 
          type="text" 
          placeholder="Search..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar p-2"
        />
      </div>
      {isFormOpen && (
        <TodoForm 
          todo={selectedTodo} 
          onCancel={handleCancel} 
          onSave={handleSave} 
        />
      )}
      <div className="todo-grid">
        {filteredTodos.map(todo => (
          <TodoCard 
            key={todo.id} 
            todo={todo} 
            onEdit={() => handleEdit(todo)}
            onDelete={(id) => deleteMutation.mutate(id)} 
          />
        ))}
      </div>

    </div>
  );
};

export default TodoList;

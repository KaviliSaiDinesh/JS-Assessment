import React, { useState, useEffect } from 'react';

const TodoForm = ({ todo, onCancel, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...todo, title, description });
  };

  return (
    <form className="p-4 bg-gray-800 rounded" onSubmit={handleSubmit}>
      <div>
        <label>Title :</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="p-2 rounded w-full"
        />
      </div>
      <button type="button" onClick={onCancel} className="p-2 rounded">Cancel</button>
      <button type="submit" className="p-2 rounded">{todo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;

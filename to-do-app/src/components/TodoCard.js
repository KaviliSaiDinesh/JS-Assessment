import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoCard = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h2>{todo.title}</h2>
        <div className="card-buttons">
          <button onClick={onEdit} className="icon-button">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(todo.id)} className="icon-button">
            <FaTrash />
          </button>
        </div>
      </div>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoCard;

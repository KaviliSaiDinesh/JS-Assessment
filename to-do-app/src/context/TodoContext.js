import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

const fetchTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      resolve(todos);
    }, 500);
  });
};

const addTodo = async (todo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      resolve(todo);
    }, 500);
  });
};

const updateTodo = async (updatedTodo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      const index = todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        todos[index] = updatedTodo;
        localStorage.setItem('todos', JSON.stringify(todos));
      }
      resolve(updatedTodo);
    }, 500);
  });
};

const deleteTodo = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      const updatedTodos = todos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      resolve(id);
    }, 500);
  });
};

export const TodoProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: todos = [], isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  return (
    <TodoContext.Provider value={{
      todos, isLoading, error, addMutation, updateMutation, deleteMutation
    }}>
      {children}
    </TodoContext.Provider>
  );
};

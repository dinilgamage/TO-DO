import axios from 'axios';
import { useState } from 'react';
import { useTodosContext } from '../hooks/useTodosContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodosContext();
  const cardClass = `todo-card ${todo.completed ? 'completed' : ''}`;
  

  const handleEdit = () => {

  };

  const handleDelete = async () => {
    
      try {
        const response = await axios.delete(`http://localhost:4000/todos/${todo._id}`);
        console.log(response);
        dispatch({ type: 'DELETE_TODO', payload: response.data });
      } catch(error){
        console.error('Error deleting todo:', error);
      }   
  };
  
  return (
    <div className={cardClass}>
      <input type="checkbox" className="custom-checkbox" checked={todo.completed} readOnly />
      <span>{todo.title}</span>
      <div className="icon-container">
        <img src="/icons/edit.svg" alt="Edit" onClick={handleEdit} />
        <img src="/icons/bin.svg" alt="Delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoItem;

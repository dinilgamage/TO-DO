import axios from 'axios';
import { useState } from 'react';
import { useTodosContext } from '../hooks/useTodosContext';
import { useAuthContext } from '../hooks/useAuthContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodosContext();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title); 
  const { user } = useAuthContext();

  const handleToggleCompletion = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await axios.put(`http://localhost:4000/todos/${todo._id}`, {
        completed: !todo.completed
      },{
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      dispatch({ type: 'TOGGLE_TODO_COMPLETION', payload: response.data });
    } catch (error) {
      console.error('Error toggling todo completion:', error);
    }
  };

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:4000/todos/${todo._id}`,{
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      dispatch({ type: 'DELETE_TODO', payload: response.data });
    } catch(error){
      console.error('Error deleting todo:', error);
    }   
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!user) {
      return;
    }
    try {
      const response = await axios.put(`http://localhost:4000/todos/${todo._id}`, {
        title: title,
      },{
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      
      });
      console.log(response);
      dispatch({ type: 'UPDATE_TODO', payload: response.data }); 
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      {!isEditing && (
        <input type="checkbox" className="custom-checkbox" checked={todo.completed} onChange={handleToggleCompletion} />
      )}
      {isEditing ? (
        <input   
          type="text"   
          value={title}   
          onChange={(e) => setTitle(e.target.value)}   
          onBlur={handleSave}   
          autoFocus   
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div className="icon-container">
        {isEditing ? (
          <img src="/icons/tick.svg" alt="Save" onClick={handleSave} />
        ) : (
          <>
            <img src="/icons/edit.svg" alt="Edit" onClick={handleEdit} />
            <img src="/icons/bin.svg" alt="Delete" onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
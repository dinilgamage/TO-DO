import axios from 'axios';
import { useState } from 'react';
import { useTodosContext } from '../hooks/useTodosContext';
import { useAuthContext } from '../hooks/useAuthContext';

const AddTodo = () => {
  const { dispatch, successMessage } = useTodosContext();
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      setError('Please log in to add a todo');
      return;
    }

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/todos`, {
            title,
        }, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        console.log(response);
        setTitle('');
        setError(null);
        dispatch({ type: 'ADD_TODO', payload: response.data });
    } catch (error) {
        console.error('Error adding todo:', error);
        setError(error.response.data.message);
        successMessage && dispatch({ type: 'CLEAR_SUCCESS_MESSAGE' });
    }
}

  
  return (
      <div className="add-todo">
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input 
            type="text" 
            id="title" 
            placeholder="Add todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn-add">Add</button>
  
      </form>
      </div>  
  );
};

export default AddTodo;

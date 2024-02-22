import axios from 'axios';
import { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post('http://localhost:4000/todos', {
            title,
        });
        console.log(response);
        setTitle('');
        setError(null);
        setSuccess('Todo added');
    } catch (error) {
        console.error('Error adding todo:', error);
        setError(error);
        setSuccess(null);
    }
}

  
  return (
      <div className="add-todo">
        {error && <div className="error">{error.message}</div>}
        {success && <div className="success">{success}</div>}
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

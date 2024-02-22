import { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  
  return (
      <div className="add-todo">
        <form>
        <div className="form-control">
          <input 
            type="text" 
            id="title" 
            placeholder="Add todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      </div>  
  );
};

export default AddTodo;

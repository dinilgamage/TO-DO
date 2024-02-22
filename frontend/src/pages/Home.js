import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTodosContext } from '../hooks/useTodosContext';


//components
import TodoItem from '../components/TodoItem';

const Home = () => {
    const { todos, dispatch } = useTodosContext();
    const [filter, setFilter] = useState('All');


    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/todos');
                dispatch({ type: 'SET_TODOS', payload: response.data });
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleClearCompleted = async () => {
        try {
          const response = await axios.delete('http://localhost:4000/todos/all/completed');
          const activeTodos = todos.filter(todo => !todo.completed);
          dispatch({ type: 'SET_TODOS', payload: activeTodos });
        } catch (error) {
          console.error('Error clearing completed tasks:', error);
        }
      };

    const filteredTodos = todos ? todos.filter(todo => {
        switch (filter) {
          case 'All':
            return true;
          case 'Active':
            return !todo.completed;
          case 'Completed':
            return todo.completed;
          default:
            return true;
        }
      }) : [];

      return (
        <div className="home">
          {todos && todos.length >  0 ? (
            <>
              <div className='tab'>
                <div className="filter-buttons">
                  <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
                  <button className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active</button>
                  <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</button>
                </div>
                <div className='clear-button'>
                  <button className="clear-completed" onClick={handleClearCompleted}>Clear</button>
                </div>
              </div>
              <div className="todo-list">
                {filteredTodos.map(todo => (
                  <TodoItem key={todo._id} todo={todo} />
                ))}
              </div>
            </>
          ) : (
            <div className="no-todos-message">
                <img src="/notodo.svg" alt="Empty list" />
                <h2>Add your first todo :)</h2>
            </div>
          )}
        </div>
      );
}

export default Home;
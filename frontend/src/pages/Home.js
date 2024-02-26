import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTodosContext } from '../hooks/useTodosContext';
import { useAuthContext } from '../hooks/useAuthContext'; 


//components
import TodoItem from '../components/TodoItem';

const Home = () => {
    const { todos, dispatch } = useTodosContext();
    const [filter, setFilter] = useState('All');
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchTodos = async () => {
          setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                dispatch({ type: 'SET_TODOS', payload: response.data });
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
            finally {
              setIsLoading(false);
            }
        };

        if (user){
            fetchTodos();
        }

    }, [dispatch, user]);

    const handleClearCompleted = async () => {
      if (!user) {
        return;
      }
        try {
          await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/todos/all/completed`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          
          });
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
          {isLoading ? (
            <div className="overlay">
              <div className="spinner"></div>
            </div>
          ) : (
            todos && todos.length > 0 ? (
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
            )
          )}
        </div>
      );
}

export default Home;
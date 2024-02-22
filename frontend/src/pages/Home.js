import { useEffect, useState } from 'react';
import axios from 'axios';

//components
import TodoItem from '../components/TodoItem';

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div className="home">
            {todos && todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
}

export default Home;
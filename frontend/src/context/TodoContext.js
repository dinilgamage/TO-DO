import { createContext, useReducer } from 'react';

export const TodosContext = createContext();

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.payload,
                successMessage: null
            }
        case 'ADD_TODO':
            return {
                todos: [action.payload, ...state.todos],
                successMessage: 'Todo added'
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter((t) => t._id !== action.payload._id),
                successMessage: 'Todo deleted'
            }    

        case 'CLEAR_SUCCESS_MESSAGE':
            return {
                ...state,
                successMessage: null
            }

        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: null
    });

    return (
        <TodosContext.Provider value={{...state, dispatch}}>
            {children}
        </TodosContext.Provider>
    );
};

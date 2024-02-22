import { createContext, useReducer } from 'react';

export const TodosContext = createContext();

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.payload
            }
        case 'ADD_TODO':
            return {
                todos: [action.payload, ...state.todos]
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

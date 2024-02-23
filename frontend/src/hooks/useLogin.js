import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        setError(null);
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:4000/user/login', {
                email,
                password,
            });
            const data = await res.data
            if (data.error) {
                setIsLoading(false);
                setError(data.error);
            }
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(data));

            //update the auth context
            dispatch({ type: 'LOGIN', payload: data });
            setIsLoading(false);
        } catch (err) {
            setError(err.response.data.error);
            setIsLoading(false);
        }
    };

    return { login, error, isLoading };
}
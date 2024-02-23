import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signup(email, password);
    };
    
    return (
        <div>
        <form className="auth-card" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>Email: </label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <label>Password: </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button disabled={isLoading}>Signup</button>
            {error && <div className='error'>{error}</div>}

        </form>
        </div>
    );
    };

export default Signup;
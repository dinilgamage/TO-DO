import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };
    
    return (
        <div>
            <form className="auth-card" onSubmit={handleSubmit}>
                <h3>Login</h3>
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
                <button disabled={isLoading}>Login</button>
                {error && <div className='error-auth'>{error}</div>}
            </form>
            {isLoading && (
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            )}
        </div>
    );
};

export default Login;
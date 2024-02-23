import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../src/hooks/useAuthContext';



//pages and components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      {user && (<AddTodo />)}
      <div className="pages">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
          <Route 
            path="/signup" 
            element={<Signup />}
          />
        </Routes>
      </div>    
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <AddTodo />
      <div className="pages">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
        </Routes>
      </div>    
      </BrowserRouter>
    </div>
  );
}

export default App;

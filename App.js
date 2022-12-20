
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<Home/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

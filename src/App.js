
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavPage from './components/NavPage';
import LogIn from './components/LogIn';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

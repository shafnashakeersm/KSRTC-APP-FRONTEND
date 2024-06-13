
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavPage from './components/NavPage';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

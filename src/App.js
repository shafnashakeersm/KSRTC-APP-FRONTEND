
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavPage from './components/NavPage';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/addbus' element={<AddBus/>}/>
      <Route path='/search' element={<SearchBus/>}/>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

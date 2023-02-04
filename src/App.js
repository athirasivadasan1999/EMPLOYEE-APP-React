
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmp from './components/AddEmp';

function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<Home/> } />
      <Route path='/employee' element={<AddEmp/>}/>
     </Routes>
     </BrowserRouter>
   
  );
}

export default App;



import {  Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<Register/>}/>
        </Routes>
      </div>
    
  );
}

export default App;

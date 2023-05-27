

import {  Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from "./components/Home";
import Details from "./components/Details"

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<Register/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/details" element = {<Details/>}/>
        </Routes>
      </div>
    
  );
}

export default App;

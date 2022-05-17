import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Index from "./components/Index"
import Search from './components/Search';
import Details from './components/Details';
import Register from './components/Register';

const App = (props) => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;

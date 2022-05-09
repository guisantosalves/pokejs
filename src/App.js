import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Index from "./components/Index"

const App = (props) => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
    </div>
  )
}

export default App;

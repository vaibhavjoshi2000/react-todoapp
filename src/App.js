import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';

const App = () => {

  return (
    <div className="container">
    <BrowserRouter basename = "/react-todoapp">
      <Routes>
        <Route exact path="/react-todoapp" element={<Create />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path = "/update" element = {<Update />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

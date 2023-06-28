import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Word from './components/Word';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" exact element = {<Word/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

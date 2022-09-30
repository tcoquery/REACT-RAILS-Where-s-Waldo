import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from './App';
import "./index.css";
import Puzzle from './components/Puzzle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="{process.env.PUBLIC_URL + '/'" element={<App />}/>
      <Route path="{process.env.PUBLIC_URL + '/:puzzleId'" element={<Puzzle />}/>
    </Routes>
  </Router>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from './App';
import "./index.css";
import Puzzle from './components/Puzzle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/:puzzleId" element={<Puzzle />}/>
    </Routes>
  </Router>
);


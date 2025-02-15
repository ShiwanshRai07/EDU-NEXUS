import Landing from './pages/Landing/Landing';
import BarterSkills from './pages/BarterSkills/BarterSkills.jsx';
import BooksExchange from './pages/Books/BooksExchange.jsx';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/skill-trade" element={<BarterSkills />} />
        <Route path="/book-trade" element={<BooksExchange />} />
      </Routes>
    </Router>
  );
};
export default App;  

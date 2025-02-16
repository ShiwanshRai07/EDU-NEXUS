import Landing from './pages/Landing/Landing';
import BarterSkills from './pages/BarterSkills/BarterSkills.jsx';
import BooksExchange from './pages/Books/BooksExchange.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/login' element={<SignIn/>}/>

        <Route path="/" element={<Landing />} />
        <Route path="/skill-trade" element={<BarterSkills />} />
        <Route path="/book-trade" element={<BooksExchange />} />
      </Routes>
    </Router>
  );
};
export default App;
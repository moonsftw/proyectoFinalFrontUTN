
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import CardPage from './Components/CardPage/CardPage';
import { Landing } from './Components/Landing/Landing';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  )
}

export default App

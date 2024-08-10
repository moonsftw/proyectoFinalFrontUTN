
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { Home, Landing, NotFound, Register, Verification  } from './Pages';




function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/@me" element={<Verification/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<NotFound />} />

       {/*  <Route path="/card" element={<CardPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App

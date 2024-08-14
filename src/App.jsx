
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { Comunidad, Home, InviteInvalid, Landing, Login, NotFound, Register, Servers, Verification  } from './Pages';




function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/@me" element={<Verification/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/invite" element={<InviteInvalid />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/server" element={<Comunidad />} />

       {/*  <Route path="/card" element={<CardPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'


import './App.css'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage'
import Signup from './Components/Login&Signup/Signup';
import Login from './Components/Login&Signup/Login';
import Tourist from './Components/Tourist-Attraction/Tourist';


function App() {
 

  return (
    <>
    <BrowserRouter><Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/touristattraction" element={<Tourist/>}/>

      </Routes></BrowserRouter>

      
    </>
  )
}

export default App

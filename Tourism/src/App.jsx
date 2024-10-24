import React from 'react'


import './App.css'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage'
import Signup from './Components/Login&Signup/Signup';


function App() {
 

  return (
    <>
    <BrowserRouter><Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Homepage/>}/>

      </Routes></BrowserRouter>

      
    </>
  )
}

export default App

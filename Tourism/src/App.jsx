import React from 'react'


import './App.css'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage'
import Signup from './Components/Login&Signup/Signup';
import Login from './Components/Login&Signup/Login';
import Tourist from './Components/Tourist-Attraction/Tourist';
import Feedback from './Components/Feedback/Feedback';
import FoodHubs from './Components/FoodHubs/FoodHubs'
import MarinaBaySands from './Components/Tourist-Attraction/TouristBlog/MarinaBaySands';
import Guide from './Components/Guide/Guide';


function App() {
 

  return (
    <>
    <BrowserRouter><Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/touristattraction" element={<Tourist/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/foodhubs' element={<FoodHubs/>}/>
      <Route path='/marinabaysands' element={<MarinaBaySands/>}/>
      <Route path='/guide' element={<Guide/>}/>

      </Routes></BrowserRouter>

      
    </>
  )
}

export default App

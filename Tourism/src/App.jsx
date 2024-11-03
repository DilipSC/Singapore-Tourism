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
import Events from './Components/Events/Events';
import About from './Components/About/About';
import GardensByTheBay from './Components/Tourist-Attraction/TouristBlog/GardensByTheBay';
import SentosaIsland from './Components/Tourist-Attraction/TouristBlog/SentosaIsland';


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
      <Route path='/events' element={<Events/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gardensbythebay' element={<GardensByTheBay/>}/>
      <Route path='/sentosaisland' element={<SentosaIsland/>}/>

      </Routes></BrowserRouter>

      
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/AuthContext';

import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Signup from './Components/Login&Signup/Signup';
import Login from './Components/Login&Signup/Login';
import Tourist from './Components/Tourist-Attraction/Tourist';
import Feedback from './Components/Feedback/Feedback';
import FoodHubs from './Components/FoodHubs/FoodHubs';
import MarinaBaySands from './Components/Tourist-Attraction/TouristBlog/MarinaBaySands';
import Guide from './Components/Guide/Guide';
import Events from './Components/Events/Events';
import About from './Components/About/About';
import GardensByTheBay from './Components/Tourist-Attraction/TouristBlog/GardensByTheBay';
import SentosaIsland from './Components/Tourist-Attraction/TouristBlog/SentosaIsland';
import NotFound from './Components/NotFound';
import Culture from './Components/Culture/Culture';
import ArtScienceMuseum from './Components/Tourist-Attraction/TouristBlog/ArtScienceMuseum';
import Chinatown from './Components/Tourist-Attraction/TouristBlog/Chinatown';
import ClarkeQuay from './Components/Tourist-Attraction/TouristBlog/ClarkeQuay';
import OrchardRoad from './Components/Tourist-Attraction/TouristBlog/OrchardRoad';
import SingaporeBotanicGardens from './Components/Tourist-Attraction/TouristBlog/SingaporeBotanicGardens';
import SingaporeZoo from './Components/Tourist-Attraction/TouristBlog/SingaporeZoo';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/notfound" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/touristattraction" element={<Tourist />} />
          <Route path="/feedback" element={<Feedback /> } />
          <Route path="/foodhubs" element={<FoodHubs />} />
          <Route path="/marinabaysands" element={<MarinaBaySands />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/gardensbythebay" element={<GardensByTheBay />} />
          <Route path="/sentosaisland" element={<SentosaIsland />} />
          <Route path='/culture' element={<Culture/>}/>
          <Route path='/artsciencemuseum' element={<ArtScienceMuseum/>}/>
          <Route path='/chinatown' element={<Chinatown/>}/>
          <Route path='/clarequay' element={<ClarkeQuay/>}/>
          <Route path='/orchardroad' element={<OrchardRoad/>}/>
          <Route path='/singaporebotanicgardens' element={<SingaporeBotanicGardens/>}/>
          <Route path='/singaporezoo' element={<SingaporeZoo/>}/>   


          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import './App.css';
import RestaurantSearchPage from './pages/RestaurantSearchPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './pages/HomePage.js';
import TripsList from './pages/TripsList.js';
import RealtimeDb from './firebase/RealtimeDb';
import Footer from './components/Footer';
import ThemeMenuChanger from './components/ThemeMenu/ThemeMenuChanger';
import { useState } from 'react';

const App = () => {
  
  let [showbox, setShowBox] = useState(false);

  const changeStateFunction = () => {

    if (showbox === false) {
      setShowBox(showbox = true);
    }

    else { 
      setShowBox(showbox = false)
    }

  }

  return (
    <div className="App">
      <NavBar showbox={showbox} changeStateFunction={changeStateFunction} />
      <ThemeMenuChanger showbox={showbox}/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/restaurant-search" element={<RestaurantSearchPage />} />
          <Route path="/tripslist" element={<TripsList />} />
          <Route path="/realtime" element={<RealtimeDb />}/>
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import RestaurantSearchPage from './RestaurantSearchPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import HomePage from './HomePage.js';
import FirebaseHandlingData from './FirebaseHandlingData';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
       <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/restaurant-search" element={<RestaurantSearchPage />} />
          <Route path="/trip-list" element={<FirebaseHandlingData/>}/>
       </Routes>
      </header>
    </div>
  );
}

export default App;

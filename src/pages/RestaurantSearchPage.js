import React, { useState } from "react";
import LoadingAnimation from '../components/LoadingAnimation.js';
import ButtonLiked from '../components/ButtonLiked.js';
import './SearchPage.css'
import RestaurantItems from "../components/RestaurantItems.js";

function RestaurantSearchPage() {
  const [RestaurantItem, setRestaurantItem] = useState([]);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  const YELPAPICall = () => {
      
      const proxiedUrl = 'https://api.yelp.com/v3/businesses/search';
      const url = new URL('http://proxy.hackeryou.com');
  
    url.search = new URLSearchParams({
      reqUrl: proxiedUrl,
      'params[term]': 'restaurants',
      'params[location]': `${userInput}`,
      'proxyHeaders[Authorization]': 'Bearer SH6cIaiOu4yFDQ9M6w-8GGkgwaEdtzV1HmQ461hIForr3PDqa-_AwLRfvIkPqrDYKuSvAh9YRLkMSf2BsVEswIWTOGDwrnzM18PA8DEr6elO4j3eBDNqZGixXUbrYXYx',
    });
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRestaurantItem(data.businesses);
    });
   
  }
    
  const RenderAPICall = () => {
    
    if (RestaurantItem === null || RestaurantItem === ' ' || RestaurantItem === undefined || RestaurantItem.length === 0);
    
    else {
    
      return (
        <>
        
          <div className={`Loading${loadingAnimation ? " show" : " hide"}`}>
            <LoadingAnimation/>
          </div>
          <div className="APIItemsContainer">
          <ul className='RestaurantItems'>
            <RestaurantItems RestaurantItemsMap={RestaurantItem} userInput={userInput}/>
            </ul>
          </div>
        </>
      );
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };
  
  const handleInputChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
    const endAnimation = () => {
      setLoadingAnimation(false);
    };
    setLoadingAnimation(true);
    setTimeout(endAnimation, 4000);
  };
  
  const renderLoadingAnimation = () => {
  
    if (LoadingAnimation === false); 

    else if (LoadingAnimation === true){

      return (
          
        <LoadingAnimation />

      )

    }
  }
  
  return (
    <div className="wrapper-SearchPage">
      <h2>Search for your Next Adventure Spot to Make your Trip Great!</h2>
      <form onSubmit={handleSubmit} className='SearchPageFormAPI'>
          <label htmlFor="newTrip" aria-label="Add new trip"></label>
          <input placeholder="Add a new trip" type="text" id="newTrip" value={userInput} onChange={handleInputChange} />
        <button onClick={YELPAPICall}>Search</button>
      </form >
      {RenderAPICall()}
      {renderLoadingAnimation()}
    </div>
  );
}

export default RestaurantSearchPage;

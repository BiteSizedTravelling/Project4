import React, { useState } from "react";
import LoadingAnimation from '../components/LoadingAnimation.js';
import './SearchPage.css'
import RestaurantItemsMap from "../components/RestaurantItemsMap.js";

function RestaurantSearchPage() {
  const [RestaurantItem, setRestaurantItem] = useState([]);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userInputTerm, setUserInputTerm] = useState('');
  
  const YELPAPICall = () => {
    console.log(userInputTerm);
      const proxiedUrl = 'https://api.yelp.com/v3/businesses/search';
      const url = new URL('http://proxy.hackeryou.com');
  
    url.search = new URLSearchParams({
      reqUrl: proxiedUrl,
      'params[term]': `${userInputTerm}`,
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
              <RestaurantItemsMap userInputTerm={userInputTerm} RestaurantItemsMap={RestaurantItem} userInput={userInput}/>
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

  const UpdateCat = (event) => {
    setUserInputTerm(event.target.value); 
  } 
  
  return (
    <div className="wrapper-SearchPage">
      <h2>Where Would You Like to Go?</h2>
      <form onSubmit={handleSubmit} className='searchPageFormApi'>
          <label htmlFor="newTrip" aria-label="Add new trip"></label>
          <input placeholder="Search for a city" type="text" id="newTrip" value={userInput} onChange={handleInputChange} />
        <button onClick={YELPAPICall}>Search</button>
        
        <select onChange={UpdateCat} className="customSelect categorySelect">
        <option className="categoryType" value=''>Choose a Place</option>
          <option className="categoryType" value='Hotel'>Hotel</option>
          <option className="categoryType" value='Restaurant'>Restaurant</option>
          <option className="categoryType" value='Museum'>Museum</option>
        </select>

      </form >
      {RenderAPICall()}
      {renderLoadingAnimation()}
    </div>
  );
}

export default RestaurantSearchPage;

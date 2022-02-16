import React, { useEffect } from 'react';

const Right = ({city, setCity, cities, setCities, setSearch, search, weather}) => {

   const searchHandler = (e) => {
      if(city.length==0){
         window.alert("Enter valid city name");
      }
      else{
         setSearch(!search);
         if(weather!==null){
            setCities([{id: new Date().getTime().toString(),name: city},...cities]);
            console.log('city added');
         }
      }
   }

   const selectHandler = (e) => {
      for(let i = 0; i < cities.length; i++){
         if(cities[i].id===e.target.id){
            setCity(cities[i].name);
            setSearch(!search);
         }
      }
   };

   useEffect(() => {
      if(cities.length>4)
         setCities(cities.slice(0,4));
   },[cities]);

   return <div className="right-frame">
            <div className="input-field">
               <input className = "heading" type="text" value = {city} onChange = {(e) => setCity(e.target.value)} placeholder = "Another Location"/>
               <button onClick = {searchHandler}><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></button>
            </div>
            <div className="cities-list">
               {
                  cities.map((item) => {
                     return <h1 onClick = {selectHandler} className="city heading-name" key = {item.id} id = {item.id}>{item.name}</h1>
                  })
               }
            </div>
            <h2 className = "underline"></h2>
            <h2 className="header brighter heading-name">Weather details</h2>
            <div className="weather-details">
               <div className="weather-name">
                  <h2 className="heading-name">Cloudy</h2>
                  <h2 className="heading-name brighter" id = "cloudy">{weather.clouds.all}%</h2>
               </div>
               <div className="weather-name">
                  <h2 className="heading-name">Humidity</h2>
                  <h2 className="heading-name brighter" id = "humidity">{weather.main.humidity}</h2>
               </div>
               <div className="weather-name">
                  <h2 className="heading-name">Wind</h2>
                  <h2 style = {{textTransform: 'lowercase'}} className="heading-name brighter" id = "wind">{weather.wind.speed} km/h</h2>
               </div>
            </div>
            <h2 className="underline"></h2>
      </div>
}

export default Right;
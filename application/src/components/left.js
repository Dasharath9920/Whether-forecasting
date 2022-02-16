import React from 'react';

const days = {
   0: 'sunday',
   1: 'monday',
   2: 'tuesday',
   3: 'wednesday',
   4: 'thursday',
   5: 'friday',
   6: 'saturday'
}

const Left = ({weather_icons, weather, climate}) => {
   let date = new Date();
   const [hrs, mnts, day,month,year] = [date.getHours(),date.getMinutes(), date.getDay(), date.getMonth(), date.getFullYear().toString()];
   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

   return <div className="hero">
      <h1 id = "temp" className = 'temp'>{(Math.floor)(weather.main.temp-273.15)}<sup style = {{fontSize: '3rem', margin: "10px"}}>o</sup></h1>
      <div className="place">
         <h2 id = "city" className = "city_name">{weather.name}</h2>
         <h2 id = "time" className = "time">{hrs}:{mnts} - {days[day]}, {day+1} {monthNames[month]} '{year.slice(2)}</h2>
      </div>
      <div className="status">
         <img src= {weather_icons[climate].icon_image} alt="rain image" />
         <h3 id = "status" className="weather-status">{climate}</h3>
      </div>
   </div>
}

export default Left;
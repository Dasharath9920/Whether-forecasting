import React, {useState, useEffect} from 'react';
import './App.css';
import Left from './components/left.js';
import Right from './components/right.js';
import cloud from './cloud.png';
import rain from './rain.png';
import snow from './snow.png';
import cloudImage from './cloud.jpg';
import rainImage from './rain.jpg';
import snowImage from './snow.jpg';

const weather_icons = {
  'cloudy': {'image':cloudImage,'icon_image':cloud},
  'rainy': {'image':rainImage,'icon_image':rain},
  'snow': {'image':snowImage,'icon_image':snow}
}
const apiKey = '3e8f33f501a88aecd0cbd97aaa75fad7';

function App() {
  const [weather, setWeather] = useState();
  const [city,setCity] = useState('Hyderabad');
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState(false);
  const [climate, setClimate] = useState('cloudy');

  const fetchData = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    await fetch(url)
    .then((resp) => {
      if(resp.ok){
        return resp.json();
      }
      else{
        if(cities.length>0)
          setCities(cities.slice(1));
        window.alert("Enter valid city name");
        throw new Error('Enter Proper city name')
      }
    })
    .then(data => {
      setWeather(data);
      setCity('');
      setClimate('cloudy');
      if(data.main.humidity>80)
        setClimate("rainy");
      else if(data.main.temp-273<10)
        setClimate("snow");
      console.log(climate);
    })
    .catch((error) => {})
  }

  useEffect(() => {
    fetchData();
  },[search]);
 
  return (
    <div className="container">
      { weather !== undefined && 
        <div className="frame">
          <div className="left-frame" id = "temp2" style={{backgroundImage: `url(${weather_icons[climate].image})`}}>
          <Left weather_icons = {weather_icons}
            weather = {weather}
            climate = {climate}
            />
          </div>
          <Right 
          city = {city}
          setCity = {setCity}
          cities = {cities}
          setCities = {setCities}
          setSearch = {setSearch}
          search = {search}
          weather = {weather}
          />
        </div>
      }
    </div>
  );
}

export default App;
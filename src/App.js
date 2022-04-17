import "./styles.css";
import { useState } from 'react'
import DisplayWeatherInfo from "./DisplayWeatherInfo/DisplayWeatherInfo"
export default function App() {

  let [weatherData, setWeatherData] = useState([])

  let key = process.env.weather_key;
  //coordinates for Hollywood
  let lat = 26.010669708251953;
  let lon = -80.16026306152344;
  
  
  // grab weather data / set to state
  async function getWeatherInfo(){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
      .then(res => res.json())
      .then((data) => {
        setWeatherData([data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]])
      })
    }

  // map weather data to component for rendering
  let oneDayData = weatherData.map((data, index) => (
    <DisplayWeatherInfo data={data} key={index}/>
  ))

  return (

    <div className="App">
      <h1>Hatchways Front End Practice</h1>
      <button onClick={getWeatherInfo}>Get New Weather Info</button>
      <div className="forecast">{oneDayData}</div>
      
     
    </div>
  );
}

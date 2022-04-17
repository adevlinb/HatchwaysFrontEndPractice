import "./DisplayWeatherInfo.css"

export default function DisplayWeatherInfo({ data }) {
 
  let today = new Date(data.dt_txt).toString().substring(0,3);
  console.log(today, "hi")

  return (
    <div className="weatherData">
      <h1>{today}</h1>
      <div className="iconDiv" style={{ background: `url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`}}></div>
      <div className="weatherTemps">
        <h3>{data.main.temp_min.toString().substring(0,2)}°</h3>
        <h3>{data.main.temp_max.toString().substring(0,2)}°</h3>
      </div>
    </div> 
  )
}
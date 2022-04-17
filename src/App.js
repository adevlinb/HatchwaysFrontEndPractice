import "./styles.css";
import DisplayWeatherInfo from "./DisplayWeatherInfo/DisplayWeatherInfo"
export default function App() {

  let key = process.env.weather_key;
  //coordinates for Hollywood
  let lat = 26.010669708251953;
  let lon = -80.16026306152344;
  let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  
  
  
  async function getWeatherInfo(){
    let today = new Date();
    // let dayDate = today.substring(0,3);

    // console.log(days[today.getDay() - 1], "hi")
    //     days.forEach(function(day, ind){
    //       if(day === "Sat") console.log(ind);
    //     })
      console.log(today)
      console.log("hello")
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        return console.log(data, "again");
      } )
    }


  return (
    <div className="App">
      <h1>Hatchways Front End Practice</h1>

      <h1>Hi Im getting Info</h1>
      <button onClick={getWeatherInfo}>Get New Weather Info</button>
      
      
      <DisplayWeatherInfo />
     
    </div>
  );
}

import React, { useState } from "react";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiKey = "e22eb6317cbef951ad4d392d20fb6553";

function Card() {
  let data;
  const [style, setStyle] = useState("hidden");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [highLow, setHighLow] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const city = document.querySelector(".search input").value;
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    data = await response.json();
    updateData(data);
    console.log(data);
  }

  function updateData(data) {
    const sunriseTime = new Date((data.sys.sunrise + data.timezone) * 1000);
    const sunsetTime = new Date((data.sys.sunset + data.timezone) * 1000);

    changeStyle();
    setName(data.name);
    setTemp(Math.round(data.main.temp) + "°F");
    setHumidity(data.main.humidity + "%");
    setWind(data.wind.speed + " km/h")
    setHighLow(Math.round(data.main.temp_max) + "°F/" + Math.round(data.main.temp_min) + "°F");
    setFeelsLike(Math.round(data.main.feels_like) + "°F");
    setSunrise(updateTime(sunriseTime));
    setSunset(updateTime(sunsetTime));

    if (data.weather[0].main == "Clouds") {
      setWeatherIcon("clouds.png");
    } else if (data.weather[0].main == "Clear") {
      setWeatherIcon("clear.png");
    } else if (data.weather[0].main == "Rain") {
      setWeatherIcon("rain.png");
    } else if (data.weather[0].main == "Drizzle") {
      setWeatherIcon("drizzle.png");
    } else if (data.weather[0].main == "Mist") {
      setWeatherIcon("mist.png");
    }
  }

  function updateTime(time){
    var utc = time.getUTCHours();
    var timeHoursIn12HrFormat = utc >= 13 ? utc % 12 : utc;
    var timeampm = utc >= 12 ? "PM" : "AM";
    var timeMinutes = "0" + time.getUTCMinutes();
    return timeHoursIn12HrFormat + ':' + timeMinutes.substr(-2) + ' '+ timeampm
  }

  const changeStyle = () => {
    if (style !== "hidden") setStyle("show");
    else setStyle("show");
  };

  return (
    <>
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="enter city name"
            spellCheck="false"
          ></input>
          <button onClick={handleSubmit}>
            <img src="search.png"></img>
          </button>
        </div>
        <div className={style}>
          <img src={weatherIcon} className="weather-icon"></img>
          <h1 className="temp">{temp}</h1>
          <h2 className="city">{name}</h2>
          <div className="details">
            <div className="grid">
              <div className="col">
                <img src="humidity.png"></img>
                <div>
                  <p className="humidity">{humidity}</p>
                  <p className="category">Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="wind.png"></img>
                <div>
                  <p className="wind">{wind}</p>
                  <p className="category">Wind Speed</p>
                </div>
              </div>
              <div className="col">
                <img src="temperatures.png"></img>
                <div>
                  <p className="high-low">{highLow}</p>
                  <p className="category">High/Low</p>
                </div>
              </div>
              <div className="col">
                <img src="thermometer.png"></img>
                <div>
                  <p className="feels-like">{feelsLike}</p>
                  <p className="category">Feels Like</p>
                </div>
              </div>
              <div className="col">
                <img src="sunrise.png"></img>
                <div>
                  <p className="sunrise">{sunrise}</p>
                  <p className="category">Sunrise</p>
                </div>
              </div>
              <div className="col">
                <img src="sunset.png"></img>
                <div>
                  <p className="sunset">{sunset}</p>
                  <p className="category">Sunset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

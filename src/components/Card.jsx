import React, { useState } from "react";
import Head from "./Head";
import Details from "./Details";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiKey = "e22eb6317cbef951ad4d392d20fb6553";

function Card() {
  let data;
  const [style, setStyle] = useState("hidden");
  const [weatherIcon, setWeatherIcon] = useState("clouds.png");
  const [name, setName] = useState("New York");
  const [temp, setTemp] = useState("60");
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
    setWind(data.wind.speed + " km/h");
    setHighLow(
      Math.round(data.main.temp_max) +
        "°F/" +
        Math.round(data.main.temp_min) +
        "°F"
    );
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

  function updateTime(time) {
    var utc = time.getUTCHours();
    var timeHoursIn12HrFormat = utc >= 13 ? utc % 12 : utc;
    var timeampm = utc >= 12 ? "PM" : "AM";
    var timeMinutes = "0" + time.getUTCMinutes();
    return (
      timeHoursIn12HrFormat + ":" + timeMinutes.substr(-2) + " " + timeampm
    );
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
          <Head weatherIcon={weatherIcon} temp={temp} name={name} />
          <Details humidity={humidity} wind={wind} highLow={highLow} feelsLike={feelsLike} sunrise={sunrise} sunset={sunset}/>
        </div>
      </div>
    </>
  );
}

export default Card;

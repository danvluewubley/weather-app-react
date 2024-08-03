import React, { useState } from "react";
import Weather from "./Weather";
import { fetchWeather } from "../utils/api";
import { updateData } from "../utils/updateData";

function Card() {
  const [style, setStyle] = useState("hidden");
  const [weatherIcon, setWeatherIcon] = useState("clouds.png");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [highLow, setHighLow] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [city, setCity] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await fetchWeather(city);
      updateData(data, {
        setStyle,
        setName,
        setTemp,
        setHumidity,
        setWind,
        setHighLow,
        setFeelsLike,
        setSunrise,
        setSunset,
        setWeatherIcon,
      });
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <div className="card">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter city name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <img src="search.png" alt="search" />
        </button>
      </form>
      <Weather
        style={style}
        weatherIcon={weatherIcon}
        temp={temp}
        name={name}
        humidity={humidity}
        wind={wind}
        highLow={highLow}
        feelsLike={feelsLike}
        sunrise={sunrise}
        sunset={sunset}
      />
    </div>
  );
}

export default Card;

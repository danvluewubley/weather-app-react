import { updateTime } from "./time";

export function updateData(data, setFunctions) {
  const {
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
  } = setFunctions;

  const sunriseTime = new Date((data.sys.sunrise + data.timezone) * 1000);
  const sunsetTime = new Date((data.sys.sunset + data.timezone) * 1000);

  setStyle("show");
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

  switch (data.weather[0].main) {
    case "Clouds":
      setWeatherIcon("clouds.png");
      break;
    case "Clear":
      setWeatherIcon("clear.png");
      break;
    case "Rain":
      setWeatherIcon("rain.png");
      break;
    case "Drizzle":
      setWeatherIcon("drizzle.png");
      break;
    case "Mist":
      setWeatherIcon("mist.png");
      break;
    default:
      setWeatherIcon("default.png");
  }
}
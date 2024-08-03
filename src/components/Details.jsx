import WeatherDetails from "./WeatherDetails";

function Details({ humidity, wind, highLow, feelsLike, sunrise, sunset }) {
  const weatherDetails = [
    { imageSrc: "humidity.png", value: humidity, category: "Humidity" },
    { imageSrc: "wind.png", value: wind, category: "Wind" },
    { imageSrc: "temperatures.png", value: highLow, category: "High/Low" },
    { imageSrc: "thermometer.png", value: feelsLike, category: "Feels Like" },
    { imageSrc: "sunrise.png", value: sunrise, category: "Sunrise" },
    { imageSrc: "sunset.png", value: sunset, category: "Sunset" },
  ];

  return (
    <div className="details">
      <WeatherDetails details={weatherDetails} />
    </div>
  );
}

export default Details;
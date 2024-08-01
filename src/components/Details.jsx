function Details({ humidity, wind, highLow, feelsLike, sunrise, sunset }) {
  return (
    <>
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
    </>
  );
}

export default Details;

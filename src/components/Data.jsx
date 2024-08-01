function Data() {
  return (
    <>
      <div class="weather">
        <img src="rain.png" class="weather-icon"></img>
        <h1 class="temp">22°F</h1>
        <h2 class="city">New York</h2>
        <div class="details">
          <div class="grid">
            <div class="col">
              <img src="humidity.png"></img>
              <div>
                <p class="humidity">50%</p>
                <p class="category">Humidity</p>
              </div>
            </div>
            <div class="col">
              <img src="wind.png"></img>
              <div>
                <p class="wind">15 km/h</p>
                <p class="category">Wind Speed</p>
              </div>
            </div>
            <div class="col">
              <img src="temperatures.png"></img>
              <div>
                <p class="high-low">22°F</p>
                <p class="category">High/Low</p>
              </div>
            </div>
            <div class="col">
              <img src="thermometer.png"></img>
              <div>
                <p class="feels-like">22°F</p>
                <p class="category">Feels Like</p>
              </div>
            </div>
            <div class="col">
              <img src="sunrise.png"></img>
              <div>
                <p class="sunrise">8am</p>
                <p class="category">Sunrise</p>
              </div>
            </div>
            <div class="col">
              <img src="sunset.png"></img>
              <div>
                <p class="sunset">10:00pm</p>
                <p class="category">Sunset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;

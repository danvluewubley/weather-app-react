function Head({ weatherIcon, temp, name }) {
  return (
    <>
      <img src={weatherIcon} className="weather-icon"></img>;
      <h1 className="temp">{temp}</h1>
      <h2 className="city">{name}</h2>
    </>
  );
}

export default Head;

function FeelsLike({ feelsLike }) {
  return (
    <>
      <div className="col">
        <img src="thermometer.png"></img>
        <div>
          <p className="feels-like">{feelsLike}</p>
          <p className="category">Feels Like</p>
        </div>
      </div>
    </>
  );
}

export default FeelsLike;

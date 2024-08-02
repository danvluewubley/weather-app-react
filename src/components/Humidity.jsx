function Humidity({ humidity }) {
  return (
    <>
      <div className="col">
        <img src="humidity.png"></img>
        <div>
          <p className="humidity">{humidity}</p>
          <p className="category">Humidity</p>
        </div>
      </div>
    </>
  );
}

export default Humidity;

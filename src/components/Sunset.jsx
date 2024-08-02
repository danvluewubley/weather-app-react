function Sunset({ sunset }) {
  return (
    <>
      <div className="col">
        <img src="sunset.png"></img>
        <div>
          <p className="sunset">{sunset}</p>
          <p className="category">Sunset</p>
        </div>
      </div>
    </>
  );
}

export default Sunset;

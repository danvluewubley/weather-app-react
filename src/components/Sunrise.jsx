function Sunrise({ sunrise }) {
  return (
    <>
      <div className="col">
        <img src="sunrise.png"></img>
        <div>
          <p className="sunrise">{sunrise}</p>
          <p className="category">Sunrise</p>
        </div>
      </div>
    </>
  );
}

export default Sunrise;

function Wind({ wind }) {
  return (
    <>
      <div className="col">
        <img src="wind.png"></img>
        <div>
          <p className="wind">{wind}</p>
          <p className="category">Wind Speed</p>
        </div>
      </div>
    </>
  );
}

export default Wind
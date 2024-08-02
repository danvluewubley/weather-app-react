function HighLow({ highLow }) {
  return (
    <>
      <div className="col">
        <img src="temperatures.png"></img>
        <div>
          <p className="high-low">{highLow}</p>
          <p className="category">High/Low</p>
        </div>
      </div>
    </>
  );
}

export default HighLow;

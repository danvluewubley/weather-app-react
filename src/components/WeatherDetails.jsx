function WeatherDetails({ details }) {
  return (
    <div className="grid">
      {details.map(({ imageSrc, value, category }, index) => (
        <div className="col" key={index}>
          <img src={imageSrc} alt={`${category} icon`} />
          <div>
            <p className={category.toLowerCase()}>{value}</p>
            <p className="category">{category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherDetails;

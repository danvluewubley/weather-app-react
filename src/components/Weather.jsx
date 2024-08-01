import Head from "./Head";
import Details from "./Details";

function Weather({
  style,
  weatherIcon,
  temp,
  name,
  humidity,
  wind,
  highLow,
  feelsLike,
  sunrise,
  sunset,
}) {
  return (
    <>
      <div className={style}>
        <Head weatherIcon={weatherIcon} temp={temp} name={name} />
        <Details
          humidity={humidity}
          wind={wind}
          highLow={highLow}
          feelsLike={feelsLike}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
    </>
  );
}

export default Weather;

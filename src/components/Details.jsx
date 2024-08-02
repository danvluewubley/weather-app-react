import Humidity from "./Humidity";
import Wind from "./Wind";
import HighLow from "./HighLow";
import FeelsLike from "./FeelsLike";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

function Details({ humidity, wind, highLow, feelsLike, sunrise, sunset }) {
  return (
    <>
      <div className="details">
        <div className="grid">
          <Humidity humidity={humidity} />
          <Wind wind={wind} />
          <HighLow highLow={highLow} />
          <FeelsLike feelsLike={feelsLike} />
          <Sunrise sunrise={sunrise} />
          <Sunset sunset={sunset} />
        </div>
      </div>
    </>
  );
}

export default Details;

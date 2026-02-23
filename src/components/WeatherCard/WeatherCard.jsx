import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter(
    (option) =>
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition,
  );

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  // Only show temperature if it's a valid number (not the 999 placeholder)
  const showTemp = weatherData.temp.F && weatherData.temp.F < 999;

  return (
    <section className="weather-card">
      {showTemp && (
        <p className="weather-card__temp">
          {Math.round(weatherData.temp.F)} &deg;F
        </p>
      )}
      <img
        className="weather-card__image"
        src={weatherOption?.url}
        alt={`Card showing ${weatherData.isDay ? "daytime" : "nighttime"} ${
          weatherData.condition || ""
        } weather`}
      />
    </section>
  );
}

export default WeatherCard;

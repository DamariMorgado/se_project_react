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

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;F</p>
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

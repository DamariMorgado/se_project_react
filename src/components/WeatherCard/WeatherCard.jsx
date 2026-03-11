import { useContext } from "react";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

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

  const showTemp = weatherData.temp.F !== undefined && weatherData.temp.F < 999;

  return (
    <section className="weather-card">
      {showTemp && (
        <p className="weather-card__temp">
          {weatherData.temp[currentTemperatureUnit]} &deg;
          {currentTemperatureUnit}
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

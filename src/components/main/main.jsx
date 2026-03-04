import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherData.type,
  );

  const showTemp = weatherData.temp.F && weatherData.temp.F < 999;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        {showTemp ? (
          <p className="cards__text">
            Today is {weatherData.temp[currentTemperatureUnit]} &deg;
            {currentTemperatureUnit} / You may want to wear:
          </p>
        ) : (
          <p className="cards__text">Loading weather data...</p>
        )}
        <ul className="cards__list">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

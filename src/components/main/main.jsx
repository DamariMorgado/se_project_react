import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherData.type,
  );

  // Only show temperature text if valid data is loaded (not the 999 placeholder)
  const showTemp = weatherData.temp.F && weatherData.temp.F < 999;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        {showTemp ? (
          <p className="cards__text">
            Today is {Math.round(weatherData.temp.F)} &deg;F / You may want to
            wear:
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

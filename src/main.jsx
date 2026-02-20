import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherData.type,
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">Today is {weatherData.temp.F} &deg;F</p>
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

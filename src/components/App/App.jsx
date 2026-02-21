import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    isDay: true,
    condition: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems] = useState(defaultClothingItems);

  // Form state for add garment modal
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleAddClick = () => {
    setActiveModal("add-garment");
    // Reset form
    setName("");
    setImageUrl("");
    setWeather("");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, imageUrl, weather });
    // Here you would normally send this to a backend
    // For now, just close the modal
    closeActiveModal();
  };

  useEffect(() => {
    if (!APIkey) {
      console.error(
        "Please add your OpenWeather API key in src/utils/constants.js",
      );
      return;
    }

    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Weather API Error:", error);
        console.error(
          "Make sure you added your API key in src/utils/constants.js",
        );
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} onAddButtonClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        onSubmit={handleSubmit}
      >
        <label className="modal__label" htmlFor="name">
          Name
          <input
            className="modal__input"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="modal__label" htmlFor="imageUrl">
          Image
          <input
            className="modal__input"
            type="url"
            id="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__label modal__label_type_radio" htmlFor="hot">
            <input
              className="modal__radio-input"
              type="radio"
              id="hot"
              name="weather"
              value="hot"
              checked={weather === "hot"}
              onChange={(e) => setWeather(e.target.value)}
            />
            Hot
          </label>
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="warm"
          >
            <input
              className="modal__radio-input"
              type="radio"
              id="warm"
              name="weather"
              value="warm"
              checked={weather === "warm"}
              onChange={(e) => setWeather(e.target.value)}
            />
            Warm
          </label>
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="cold"
          >
            <input
              className="modal__radio-input"
              type="radio"
              id="cold"
              name="weather"
              value="cold"
              checked={weather === "cold"}
              onChange={(e) => setWeather(e.target.value)}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;

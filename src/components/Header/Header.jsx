import avatar from "../../assets/avatar.png";
import "./Header.css";

function Header({ weatherData, onAddButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src="/logo.png" alt="WTWR logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        className="header__add-close-button"
        type="button"
        onClick={onAddButtonClick}
      >
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__avatar"
          src={avatar}
          alt="Terrence Tegegne's avatar"
        />
      </div>
    </header>
  );
}

export default Header;

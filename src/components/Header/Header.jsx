import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatar from "../../assets/avatar.png";
import "./Header.css";

function Header({ weatherData, onAddButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__nav-link">
        <img className="header__logo" src="/logo.png" alt="WTWR logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__controls">
        <button
          className="header__add-close-button"
          type="button"
          onClick={onAddButtonClick}
        >
          + Add clothes
        </button>
        <ToggleSwitch />
        <NavLink to="/profile" className="header__nav-link">
          <div className="header__user">
            <p className="header__username">Terrence Tegegne</p>
            <img
              className="header__avatar"
              src={avatar}
              alt="Terrence Tegegne's avatar"
            />
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

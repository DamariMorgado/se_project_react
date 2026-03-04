import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__circle"></span>
      <span
        className="toggle-switch__text toggle-switch__text_F"
        style={{ color: currentTemperatureUnit === "F" ? "white" : "gray" }}
      >
        F
      </span>
      <span
        className="toggle-switch__text toggle-switch__text_C"
        style={{ color: currentTemperatureUnit === "C" ? "white" : "gray" }}
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;

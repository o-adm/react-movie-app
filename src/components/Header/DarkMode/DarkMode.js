import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { useLocalStorageState } from "../../Custom Hooks/useLocalStorageState";

export default function DarkMode() {
  const [switchTheme, setSwitchTheme] = useLocalStorageState(
    false,
    "ThemeColor"
  );

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-themes", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-themes", "light");
  };

  function handleSwitchToggle(e) {
    const isChecked = e.target.checked;
    setSwitchTheme(isChecked);
  }

  useEffect(
    function () {
      if (switchTheme) {
        setDarkMode();
      } else {
        setLightMode();
      }
    },
    [switchTheme]
  );
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleSwitchToggle}
        checked={switchTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
}

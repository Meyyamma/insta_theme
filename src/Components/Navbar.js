import React  from "react";
import "../Styles/pageStyle.scss";

const NavBar = () => {
  return (
    <nav className="themePage">
      <p>
        <strong>THEME SWITCHER</strong>
      </p>
      <select className="dropDown">
        <option value="none" selected hidden>
          Select Theme
        </option>
        <option value="LightMode"> Light Mode </option>
        <option value="DarkMode"> Dark Mode </option>
        <option value="ColorMode"> Color Mode </option>
      </select>
    </nav>
  );
};
export default NavBar;

import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../Styles/pageStyle.scss';

const NavBar = (props) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const setTheme = (e) => {
    setCurrentTheme(e.target.value);
  };
  props.onGetTheme(currentTheme);
  return (
    <nav className="themePage">
      <p>
        <strong>THEME SWITCHER</strong>
      </p>
      <select className="dropDown" onChange={setTheme}>
        <option value="none" defaultValue hidden>
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

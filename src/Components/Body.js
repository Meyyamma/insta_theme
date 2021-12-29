import React from 'react';
import NavBar from './Navbar';
import '../Styles/pageStyle.scss';
import { useState } from 'react/cjs/react.development';
export default function Body() {
  const [Theme, setCurrentTheme] = useState('default');
  const getTheme = (Theme) => {
    setCurrentTheme(Theme);
    // console.log(Theme);
    // let elemname = document.querySelector(`.background`);
    // console.log(elemname);
  };
  return (
    <div>
      <div className={`background background_theme_${Theme}`}>
        <br />
        <br />
        <NavBar onGetTheme={getTheme} />
        <br />
        <br />
        <div className={`firstBorder firstBorder_theme_${Theme}`}>
          <div className={`secondBorder secondBorder_theme_${Theme}`}>
            <div className={`thirdBorder thirdBorder_theme_${Theme}`}>
              <div className="innerCircle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

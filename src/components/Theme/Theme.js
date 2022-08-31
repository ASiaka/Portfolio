import { useState } from 'react';
import './theme.scss';

function Theme() {
  const [openSetting, setOpenSetting] = useState(true);

  function handleOpenSetting() {
    if(openSetting === true) {
      setOpenSetting(false)
    }
    else {
      setOpenSetting(true)
    }
  }
  console.log(openSetting);

  return (
    <div className="theme-container">
      <div className="theme-content">
        <i
          className="fa-solid fa-gear"
          onClick={handleOpenSetting}
        />
        <div className={openSetting ? "theme-setting" : "theme-setting hidden"}>
          <p className="title-theme">Theme</p>
          <div className="colors">
            <div className="color black"/>
            <div className="color blue"/>
            <div className="color orange"/>
          </div>
          <p className="title-mode">Mode</p>
          <div className="mode">
            <button className="dark">Dark</button>
            <button className="light">Light</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme;
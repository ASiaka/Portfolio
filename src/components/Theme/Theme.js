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
        <div className="icon-setting" onClick={handleOpenSetting}>
          <i className="fa-solid fa-gear"/>
        </div>
        <div className={openSetting ? "theme-setting hidden" : "theme-setting"}>
          <p className="title-theme">Theme</p>
          <div className="colors">
            <div className="color black"/>
            <div className="color blue"/>
            <div className="color orange"/>
          </div>
          <hr/>
          <p className="title-mode">Mode</p>
          <div className="mode">
            <button className="btn-mode dark">Dark</button>
            <button className="btn-mode light">Light</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme;
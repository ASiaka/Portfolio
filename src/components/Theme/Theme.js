import { useContext, useState } from 'react';
import './theme.scss';
import { ThemeContext } from '../../contexts';

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
  
  // THEMES
  const themeTools = useContext(ThemeContext);

  const themes = themeTools.themes;
  // const themeChanger = themeTools.themeChanger;
  const handleThemeChange = themeTools.handleThemeChange;
  const themeContext = themeTools.themeContext;
  const setThemeContext = themeTools.setThemeContext;

  const mode = themeTools.mode;
  const setMode = themeTools.setMode;
  const handleModeChange = themeTools.handleModeChange;

  console.log(themeContext, themes);

  return (
    <div className="theme-container" style={{color: themeContext.theme}}>
      <div className="theme-content" onMouseLeave={() => {setOpenSetting(true)}}>
        <div className="icon-setting" onClick={handleOpenSetting}
          id={mode ? handleModeChange() : "light"}
        >
          <i className="fa-solid fa-gear"/>
        </div>
        <div className={openSetting ? "theme-setting hidden" : "theme-setting"}
          id={mode ? handleModeChange() : "light"}
        >
          <p className="title-theme">Theme</p>
          <div className="colors">
            <div className="color blue" onClick={() => {setThemeContext(handleThemeChange(themes.blue, themes.blue10, themes.blue30)); setMode(false)}}/>
            <div className="color green" onClick={() => {setThemeContext(handleThemeChange(themes.green, themes.green10, themes.green30)); setMode(false)}}/>
            <div className="color red" onClick={() => {setThemeContext(handleThemeChange(themes.red, themes.red10, themes.red30)); setMode(false)}}/>
          </div>
          <hr/>
          <p className="title-mode">Mode</p>
          <div className="mode">
            <button 
              className="btn-mode dark"
              onClick={() => {
                console.log("Mode dark")
                setMode(true);
              }}
            >
              Dark
            </button>
            <button
              className="btn-mode light"
              onClick={() => {
                console.log("Mode light")
                setMode(false);
              }}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme;
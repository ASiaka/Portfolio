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

  return (
    <div className="theme-container" style={{color: themeContext.theme}}>
      <div className="theme-content" onMouseLeave={() => {setOpenSetting(true)}}>
        <div className="icon-setting" onClick={handleOpenSetting}
          id={mode ? handleModeChange() : "light"}
          style={{boxShadow: mode ? `${themeContext.theme} 2px 2px 2px 2px` : `gainsboro 1px 1px 1px 1px`}}
        >
          <i className="fa-solid fa-gear"/>
        </div>
        <div className={openSetting ? "theme-setting hidden" : "theme-setting"}
          id={mode ? handleModeChange() : "light"}
          style={{boxShadow: mode ? `${themeContext.theme} 2px 2px 2px 2px` : `gainsboro 1px 1px 1px 1px`}}
        >
          <p className="title-theme">Theme</p>
          <div className="colors">
            <div className="color blue" onClick={() => {setThemeContext(handleThemeChange(themes.blue, themes.blue10, themes.blue30, themes.blueDark)); mode === true ? setMode(true) : setMode(false)}}/>
            <div className="color green" onClick={() => {setThemeContext(handleThemeChange(themes.green, themes.green10, themes.green30, themes.greenDark)); mode === true ? setMode(true) : setMode(false)}}/>
            <div className="color red" onClick={() => {setThemeContext(handleThemeChange(themes.red, themes.red10, themes.red30, themes.redDark)); mode === true ? setMode(true) : setMode(false)}}/>
          </div>
          <hr/>
          <p className="title-mode">Mode</p>
          <div className="mode">
            <button 
              className="btn-mode dark"
              onClick={() => {
                setMode(true);
              }}
              style={{backgroundColor: themeContext.theme}}
            >
              Dark
            </button>
            <button
              className="btn-mode light"
              onClick={() => {
                setMode(false);
              }}
              style={{color: themeContext.theme}}
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
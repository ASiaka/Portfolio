// == Import
import { Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Theme from '../Theme/Theme';
import Accueil from '../Accueil/Accueil';
import Parcours from '../Parcours/Parcours';
import Projets from '../Projets/Projets';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';

import parcoursData from '../../data/data';
import './app.scss';
import { useEffect, useState } from 'react';

import { ThemeContext } from '../../contexts';
import { themeMode } from '../Theme/themeMode';

// == Composant 
function App() {
  console.log(parcoursData);

  //THEMES
  const themes = themeMode.theme;
  const themeChanger = {"theme" : themes.base, "theme10" : themes.base10, "theme30" : themes.base30, "dark" : themes.baseDark};

  const [themeContext, setThemeContext] = useState(themeChanger);
  const [mode, setMode] = useState(null);

  function handleThemeChange(theme, theme10, theme30, dark) {
    themeChanger.theme = theme;
    themeChanger.theme10 = theme10;
    themeChanger.theme30 = theme30;
    themeChanger.dark = dark;
    
    return themeChanger
  }

  function handleModeChange() {
    if (themeContext.theme === themes.base && mode === true) {
      return "darkBase"
    }
    if (themeContext.theme === themes.blue && mode === true) {
      return "darkBlue"
    }
    if (themeContext.theme === themes.green && mode === true) {
      return "darkGreen"
    }
    if (themeContext.theme === themes.red && mode === true) {
      return "darkRed"
    }
  }
  
  console.log(themeContext);

  useEffect(() => {

    document.querySelector("body").style.backgroundColor = themeContext.theme10;
    if (mode === true) {
      document.querySelector("body").setAttribute("id", handleModeChange());
    } else {
      document.querySelector("body").setAttribute("id", "light");
    }

  });

  return (
    <ThemeContext.Provider value={{
        themes, themeChanger,handleThemeChange,
        themeContext, setThemeContext,
        mode, setMode, handleModeChange
      }}>
      <div className="app">
        <Nav />
        <Theme />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/parcours" element={<Parcours {...parcoursData} />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// == Export
export default App;

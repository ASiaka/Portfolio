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

import { ThemeContext, ModeContext } from '../../contexts';
import { themeMode } from '../Theme/themeMode';

// == Composant 
function App() {
  console.log(parcoursData);
  // const [mode, setMode] = useState('light');

  const themes = themeMode.theme;
  const themeChanger = {"theme" : "#0C2F40", "theme10" : "#0C2F4010", "theme30" : "#0C2F4030"};

  const [themeContext, setThemeContext] = useState(themeChanger);

  function handleThemeChange(theme, theme10, theme30) {
    themeChanger.theme = theme;
    themeChanger.theme10 = theme10;
    themeChanger.theme30 = theme30;
    
    return themeChanger
  }
  
  console.log(themes, themeChanger, handleThemeChange);

  useEffect(() => {

    document.querySelector("body").style.backgroundColor = themeContext.theme10;

  },[themeContext]);

  return (
    <ThemeContext.Provider value={{themes, themeChanger,handleThemeChange, themeContext, setThemeContext}}>
      {/* <ModeContext.Provider value={{modeContext, setModeContext}}> */}
      <div className="app">
        <Nav />
        <Theme themes={themes} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/parcours" element={<Parcours {...parcoursData} />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
      {/* </ModeContext.Provider> */}
    </ThemeContext.Provider>
  );
}

// == Export
export default App;

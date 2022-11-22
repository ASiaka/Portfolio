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
import { useState } from 'react';

// == Composant
function App() {
  console.log(parcoursData);
  const [mode, setMode] = useState('light');
  console.log(mode);
  return (
    <div className="app">
      <Nav />
      <Theme mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/parcours" element={<Parcours {...parcoursData} />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer mode={mode} />
    </div>
  );
}

// == Export
export default App;

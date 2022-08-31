// == Import
import { Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Theme from '../Theme/Theme';
import Acceuil from '../Acceuil/Acceuil';
import Parcours from '../Parcours/Parcours';
import Projets from '../Projets/Projets';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';

import parcoursData from '../../data/data';
import './styles.css';

// == Composant
function App() {
  console.log(parcoursData);
  return (
    <div className="app">
      <Nav />
      <Theme />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/parcours" element={<Parcours {...parcoursData} />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;

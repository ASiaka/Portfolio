import Proptypes from 'prop-types';
import './parcours.scss';
import { useState } from 'react';

function Parcours({ formations, experiences, competences }) {

  const [closing, setClosing] = useState(true);

  return (
    <main className="parcours-container">
      <div className="content-items">
        <div className="items">
          <div className="titles">
            <div className="title">
              <h1 className="title-one">ALTERNANCE</h1>
              <h1 className="title-two">Développeur Web</h1>
            </div>
          </div>
          <h3 className="items-title">COMPETENCES</h3>
          {
            competences.map((competence, index) => (
              <p className="competences" key={index}>
                {
                  index === 0 &&
                  <>
                    <span className="strong">{competence.slice(0,15)}</span>
                    {competence.slice(15)}
                  </>
                }
                {
                  index === 1 &&
                  <>
                    <span className="strong">{competence.slice(0,3)} </span><br/>
                    {competence.slice(5,25)}<br/>{competence.slice(25,40)}
                  </>
                }
                {
                  (index === 2 || index === 3) &&
                  <span className="strong">{competence.slice(0)}</span>
                }
                {
                  (index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9) &&
                  competence
                }
              </p>
            ))
          }
        </div>
      </div>
      <div className="content-parcours">
        <div className="parcours">
          <h3 className="parcours-title">FORMATIONS</h3>
          {
            formations.map((formation, index) => (
              <div className="parcours-card" key={index}>
                <p className="intitule">{formation.intitule}</p>
                <p className="organisme">{formation.organisme}</p>
                <p className="periode">{formation.periode}</p>
              </div>
            ))
          }
        </div>
        <div className="parcours">
          <h3 className="parcours-title">EPERIENCES</h3>
          {
            experiences.map((experience, index) => (
              <div className={`parcours-card${index === 6 ? " nextCard" : ""}`} key={index}>
                <p className="intitule">{experience.intitule}</p>
                <p className="organisme">{experience.organisme}</p>
                <p className="periode">{experience.periode}</p>
              </div>
            ))
          }
        </div>
      </div>
      {
        closing ? 
        <div className="interets">
          <div className="interets_content">
            <p className="intitule">Centre d’interêt</p>
            <p className="interet">vélo - foot</p>
          </div>
          <i className="fa-solid fa-xmark"
            onClick={() => {setClosing(false)}}
          />
        </div>
        :
        <div className="close">
          <i className="fa-solid fa-xmark"
            onClick={() => {setClosing(true)}}
        />
        </div>
      }
    </main>
  );
}

Parcours.propTypes = {
  formations: Proptypes.arrayOf(
    Proptypes.shape({
      intitule: Proptypes.string,
      organisme: Proptypes.string,
      periode: Proptypes.string,
    }).isRequired,
  ).isRequired,
  experiences: Proptypes.arrayOf(
    Proptypes.shape({
      intitule: Proptypes.string,
      organisme: Proptypes.string,
      periode: Proptypes.string,
    }).isRequired,
  ).isRequired,
  competences: Proptypes.arrayOf(
    Proptypes.string,
  ).isRequired,
};

export default Parcours;

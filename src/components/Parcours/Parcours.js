import Proptypes from 'prop-types';
import './parcours.scss';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts';

function Parcours({ formations, experiences, competences }) {

  const [closing, setClosing] = useState(true);

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;
  
  const mode = themeTools.mode;

  const themes = themeTools.themes;

  return (
    <main className="parcours-container">
      <div className="content-items">
        <div className="items">
          <div className="titles">
            <div className="title">
              <h1 className="title-one"
                style={{backgroundColor: mode ? themes.gray : "white", color: mode ? themeContext.dark : themeContext.theme}}
              >
                ALTERNANCE
              </h1>
              <h1 className="title-two"
                style={{backgroundColor: mode ? themes.gray : "white", color: mode ? themeContext.dark : themeContext.theme, borderTopColor: mode ? themeContext.dark : themeContext.theme}}
              >
                Développeur Web
              </h1>
            </div>
          </div>
          <h3 className="items-title"
            style={{backgroundColor: mode ? themeContext.theme30 : themeContext.theme, boxShadow: "none", border: `${themes.gray} 1px solid`}}
          >
            COMPETENCES
          </h3>
          {
            competences.map((competence, index) => (
              <p className="competences" key={index} style={{color: mode ? themes.gray : themeContext.theme}}>
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
      <div className="content-parcours" style={{backgroundColor: mode ? themeContext.theme10 : "white"}}>
        <div className="parcours">
          <h3 className="parcours-title"
            style={{backgroundColor: mode ? themeContext.dark : themeContext.theme, boxShadow: mode ? "none" : `gainsboro 1px 1px 1px 1px`, border: `${themes.gray} 1px solid`}}
          >
            FORMATIONS
          </h3>
          {
            formations.map((formation, index) => (
              <div className="parcours-card" key={index} style={{backgroundColor: mode ? themeContext.theme10 : "white", color: mode ? themes.gray : themeContext.theme, boxShadow: mode ? "none" : `gainsboro 1px 1px 1px 1px`, border: `${themes.gray} 1px solid`}}>
                <p className="intitule">{formation.intitule}</p>
                <p className="organisme">{formation.organisme}</p>
                <p className="periode" style={{opacity: "70%"}}>{formation.periode}</p>
              </div>
            ))
          }
        </div>
        <div className="parcours">
          <h3 className="parcours-title"
            style={{backgroundColor: mode ? themeContext.dark : themeContext.theme, boxShadow: mode ? "none" : `gainsboro 1px 1px 1px 1px`, border: `${themes.gray} 1px solid`}}
          >
            EXPERIENCES
          </h3>
          {
            experiences.map((experience, index) => (
              <div className={`parcours-card${index === 6 ? " nextCard" : ""}`} key={index} style={{backgroundColor: mode ? themeContext.theme10 : "white", color: mode ? themes.gray : themeContext.theme, boxShadow: mode ? "none" : `gainsboro 1px 1px 1px 1px`, border: `${themes.gray} 1px solid`}}>
                <p className="intitule">{experience.intitule}</p>
                <p className="organisme">{experience.organisme}</p>
                <p className="periode" style={{opacity: "70%"}}>{experience.periode}</p>
              </div>
            ))
          }
        </div>
      </div>
      {
        closing ? 
        <div className="interets" style={{backgroundColor: mode ? themeContext.dark : "white"}}>
          <div className="interets_content" style={{color: mode ? themes.gray : themeContext.theme}}>
            <p className="intitule">Centre d’interêt</p>
            <p className="interet" style={{opacity: "70%"}}>vélo - foot</p>
          </div>
          <i className="fa-solid fa-xmark"
            onClick={() => {setClosing(false)}}
            style={{color: mode ? themes.gray : themeContext.theme}}
          />
        </div>
        :
        <div className="close" style={{backgroundColor: mode ? themeContext.dark : "white"}}>
          <i className="fa-solid fa-xmark"
            onClick={() => {setClosing(true)}}
            style={{color: mode ? themes.gray : themeContext.theme}}
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

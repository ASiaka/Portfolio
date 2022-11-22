import Proptypes from 'prop-types';
import './parcours.scss';

function Parcours({ formations, experiences, competences }) {
  return (
    <main className="parcours-container">

      <div className="content-parcours">
        <div className="parcours">
          <h3 className="parcours-title">Formations</h3>
          {
            formations.map((formation, key) => (
              <p className="parcours-card" key={key}>
                <span className="periode">{formation.periode} </span>
                <span className="organisme">{formation.organisme} </span>
                <span className="intitule">{formation.intitule}</span>
              </p>
            ))
          }
        </div>
        <div className="parcours white-background">
          <h3 className="parcours-title">Expériences</h3>
          {
            experiences.map((experience, key) => (
              <p className="parcours-card" key={key}>
                <span className="periode">{experience.periode} </span>
                <span className="organisme">{experience.organisme} </span>
                <span className="intitule">{experience.intitule} </span>
              </p>
            ))
          }
        </div>

        <div className="parcours">
          <h3 className="parcours-title">Compétences</h3>
          <div className="competence-bloc">
            <p className="competences">
            {
              competences.map((competence, key) => (
                <span key={key}>{competence} </span>
              ))
            }
            </p>
          </div>
        </div>
      </div>

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

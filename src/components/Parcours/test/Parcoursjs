import Proptypes from 'prop-types';
import './parcours.scss';

function Parcours({ formations, experiences, competences }) {
  return (
    <main className="parcours-container">
      <div className="content-items">
        <div className="items">
          <h3 className="items-title">COMPETENCES</h3>
          {
            competences.map((competence) => (
              <p className="competences" key={competence}>{competence}</p>
            ))
          }
        </div>
      </div>
      <div className="content-parcours">
        <div className="parcours">
          <h3 className="parcours-title">FORMATIONS</h3>
          {
            formations.map((formation) => (
              <div className="parcours-card" key={formation.intitule}>
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
            experiences.map((experience) => (
              <div className="parcours-card" key={experience.intitule}>
                <p className="intitule">{experience.intitule}</p>
                <p className="organisme">{experience.organisme}</p>
                <p className="periode">{experience.periode}</p>
              </div>
            ))
          }
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

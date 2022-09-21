import './accueil.scss';

function Acceuil() {
  return (
    <main className="accueil-container">
      <div className="accueil-content">
        {/* <h1>Développeur Web</h1> */}
        <div className="icon-language">
          <i className="fa-brands fa-html5 fa-5x"></i>
          <i className="fa-brands fa-css3-alt fa-5x"></i>
          <i className="fa-brands fa-sass fa-5x"></i>
          <i className="fa-brands fa-square-js fa-5x"></i>
          <i className="fa-brands fa-react fa-5x"></i>
          <i className="fa-brands fa-php fa-5x"></i>
          <i className="fa-brands fa-symfony fa-5x"></i>
          <i className="fa-brands fa-laravel fa-5x"></i>
        </div>
      </div>
    </main>
  );
}

export default Acceuil;

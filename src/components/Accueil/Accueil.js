import './accueil.scss';

function Acceuil() {
  return (
    <main className="accueil-container">
      <div className="accueil-content">
        <div className="accueil-title">
          <h1>Développeur web</h1>
          <h2>Spécialisé <span>React</span></h2>
        </div>
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
        <p className="slogan">Dev In <span>Progress</span></p>
      </div>
    </main>
  );
}

export default Acceuil;

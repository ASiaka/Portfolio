import { useContext, useEffect, useState } from 'react';
import './projets.scss';
import { ThemeContext } from '../../contexts';
import PFW from './PFW.jpg';
// import PFT from './PFT.jpg';
// import PFM from './PFM.jpg';
import RHW from './RHW.jpg';
// import RHT from './RHT.jpg';
// import RHM from './RHM.jpg';
import APW from './APW.jpg';
// import APT from './APT.jpg';
// import APM from './APM.jpg';

let value = 0;

function Projets() {

  const myProjects = [
    {
      name: 'AS',
      description: 'Mon Portfolio',
      img: ["PFW", "PFT", "PFM"],
      site: 'https://www.asiakadev.com'
    },
    {
      name: 'RévisionHelp',
      description: 'Site pour réviser son vocabulaire',
      img: ["RHW", "RHT", "RHM"],
      site: 'https://www.revisionhelp.fr'
    },
    {
      name: 'AP',
      description: 'Site d\'un entrepeneur graphiste',
      img: ["APW", "APT", "APM"],
      site: '#'
    }
  ];

  const [index, setIndex] = useState(value);

  function next() {
    value += 1;
    if(value === myProjects.length) {
      value = 0;
    }
    setIndex(value)
  };

  function prev() {
    value -= 1;
    if(value < 0) {
      value = myProjects.length -1;
    }
    setIndex(value)
  };

  const interval = useEffect(() => {

    setInterval(() => {
      next();
    }, 3000)

  }, [])

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;
  
  const mode = themeTools.mode;

  const themes = themeTools.themes;


  return (
    <main className="projets-container">
      <h1 className="projets-title" style={{color: mode ? themeTools.gray : themeContext.theme}}>Projets</h1>
      <div className="projets-content" style={{backgroundColor: mode ? themeContext.theme10 : themes.gray, boxShadow: mode ? `${themeContext.theme} 2px 2px 2px 2px` : `gainsboro 1px 1px 1px 1px`}}>
        <div
          className="slide-left slides"
          onClick={() => prev()}
          style={{backgroundColor: mode ? themeContext.dark : themeContext.theme}}
        >
          &#10094;
        </div>

        <a href={myProjects[index].site} target={index !== 2 ? '_blank' : '_self'} rel='noreferrer' className={`projet projet_${index}`}
          style={{border: `5px solid ${themeContext.theme}`}}
        >
          <img src={index === 0 ? PFW : index === 1 ? RHW : index === 2 && APW} alt={`image_${myProjects[index].name}`} className="img_display"/>
          {/* <h2 className="name">{myProjects[index].name}</h2>
          <p className="description">{myProjects[index].description}</p> */}
        </a>

        <div
          className="slide-right slides"
          onClick={() => next()}
          style={{backgroundColor: mode ? themeContext.dark : themeContext.theme}}
        >
          &#10095;
        </div>
      </div>
    </main>
  );
}

export default Projets;
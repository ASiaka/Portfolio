import { useContext, useEffect, useState } from 'react';
import './projets.scss';
import { ThemeContext } from '../../contexts';

let value = 0;

function Projets() {
  const [index, setIndex] = useState(value)

  function next() {
    value += 1;
    console.log(value);
    if(value === myProjects.length) {
      value = 0;
    }
    setIndex(value)
  }

  function prev() {
    value -= 1;
    console.log(value);
    if(value < 0) {
      value = myProjects.length -1;
    }
    setIndex(value)
  }
  
  console.log(value);

  const myProjects = [
    {
      name: 'C.carré',
      description: 'Site d\'organisation'
    },
    {
      name: 'Mémots',
      description: 'Site pour réviser son vocabulaire'
    },
    {
      name: 'AP',
      description: 'Site d\'un entrepeneur graphiste'
    }
  ]
  console.log(myProjects);

  const interval = useEffect(() => {

    setInterval(() => {
      next();
    }, 3000)
    // const interval = setInterval(() => {
    //   next();
    // }, 3000)

  }, [])

  const [view, setView] = useState();

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;


  return (
    <main className="projets-container">
      <h1 className="projets-title" style={{color: themeContext.theme}}>Projets</h1>
      <div className="projets-content">
        <div
          className="slide-left slides"
          onClick={() => prev()}
          style={{backgroundColor: themeContext.theme}}
        >
          &#10094;
        </div>

        <div className={`projet projet_${index} ${view}`}
          onClick={() => {
            console.log("cliqué");
            if (view === "view") {
              setView("")
            } else {
              setView("view")
              clearInterval(1)
            }
          }}
        >
          <h2 className="name">{myProjects[index].name}</h2>
          <p className="description">{myProjects[index].description}</p>
        </div>

        <div
          className="slide-right slides"
          onClick={() => next()}
          style={{backgroundColor: themeContext.theme}}
        >
          &#10095;
        </div>
      </div>
    </main>
  );
}

export default Projets;
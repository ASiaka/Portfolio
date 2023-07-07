import { useEffect, useState } from 'react';
import './projets.scss';

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

  useEffect(() => {
    
    const interval = setInterval(() => {

      next();
      // console.log("interval");
      // value += 1;
      // if(value < 0 || value > myProjects.length -1) {
      //   value = 0
      // }
      // setIndex(value)
    }, 3000)

  }, [])


  return (
    <main className="projets-container">
      <h1 className="projets-title">Projets</h1>
      <div className="projets-content">
        <div
          className="slide-left slides"
          onClick={() => prev()}
        >
          &#10094;
        </div>

        <div className="projet">
          <h2 className="name">{myProjects[index].name}</h2>
          <p className="description">{myProjects[index].description}</p>
        </div>

        <div
          className="slide-right slides"
          onClick={() => next()}
        >
          &#10095;
        </div>
      </div>
    </main>
  );
}

export default Projets;
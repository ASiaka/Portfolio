import { useContext, useState } from 'react';
import './contact.scss';
import { ThemeContext } from '../../contexts';

function Contact() {

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;
  
  const mode = themeTools.mode;

  const themes = themeTools.themes;

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  function handleChangeNom(event) {
    setNom(event.currentTarget.value.trim());
  };
  function handleChangePrenom(event) {
    setPrenom(event.currentTarget.value.trim());
  };
  function handleChangeMail(event) {
    setMail(event.currentTarget.value.trim());
  };
  function handleChangeSujet(event) {
    setSujet(event.currentTarget.value.trim());
  };
  function handleChangeMessage(event) {
    setMessage(event.currentTarget.value.trim());
  };

  console.log(nom);

  function regexTest(e) {
    e.preventDefault();
    console.log("regexTest");
    const namesValue = document.querySelector('.nom');
    // let regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    let regexNames = /^([a-zA-Z]{1,})([-']?[a-zA-Z]+)\s([a-zA-Z]+)$/;
    let regexEmail = /^([a-zA-Z0-9_\-.]{2,})@([a-zA-Z]{3,7})\.([a-zA-Z]{2,5})$/;
    
    if (!regexNames.test(namesValue)) {
      console.log('nom invalide!');
    }
  }
  // regexTest();

  return (
    <main className="contact-container">
      <h1 className="contact-title" style={{color: mode ? themes.gray : themeContext.theme}}>Contact</h1>
      <div className="contact-content">
        <form 
          className="contact-form"
          onSubmit={regexTest}
        >
          <input type="text"
            name="nom"
            placeholder="Nom"
            className="contact-input"
            required
            value={nom}
            onChange={handleChangeNom}
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
          />
          <input type="text"
            name="prenom"
            placeholder="Prenom"
            className="contact-input"
            required
            value={prenom}
            onChange={handleChangePrenom}
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
          />
          <input type="email"
            name="mail"
            placeholder="Mail"
            className="contact-input"
            required
            value={mail}
            onChange={handleChangeMail}
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
          />
          <input type="text"
            name="sujet"
            placeholder="Sujet"
            className="contact-input"
            required
            value={sujet}
            onChange={handleChangeSujet}
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
          />
          <textarea name="message"
            placeholder="Message"
            className="contact-input"
            required
            value={message}
            onChange={handleChangeMessage}
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
          />
          <button type="submit"
            name="envoyer" className="contact-input" id="contact-button"
            style={{backgroundColor: mode ? themeContext.theme30 : themeContext.theme}}
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

import { useState } from 'react';
import './contact.scss';

function Contact() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');


  function handleChangeNom(event) {
    setNom(event.currentTarget.value);
  };
  function handleChangePrenom(event) {
    setPrenom(event.currentTarget.value);
  };
  function handleChangeMail(event) {
    setMail(event.currentTarget.value);
  };
  function handleChangeSujet(event) {
    setSujet(event.currentTarget.value);
  };
  function handleChangeMessage(event) {
    setMessage(event.currentTarget.value);
  };

  console.log(nom);

  return (
    <main className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text"
            name="nom"
            placeholder="Nom"
            className="contact-input"
            required
            value={nom}
            onChange={handleChangeNom}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prenom"
            className="contact-input"
            required
            value={prenom}
            onChange={handleChangePrenom}
          />
          <input type="email"
            name="mail"
            placeholder="Mail"
            className="contact-input"
            required
            value={mail}
            onChange={handleChangeMail}
          />
          <input type="text"
            name="sujet"
            placeholder="Sujet"
            className="contact-input"
            required
            value={sujet}
            onChange={handleChangeSujet}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contact-input"
            required
            value={message}
            onChange={handleChangeMessage}
          />
          <button type="submit"
            name="envoyer" className="contact-input" id="contact-button">Envoyer</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

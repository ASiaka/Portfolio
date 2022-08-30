import './contact.scss';

function Contact() {
  return (
    <main className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="nom" value="" placeholder="Nom" className="contact-input" required></input>
          <input type="text" name="prenom" value="" placeholder="Prenom" className="contact-input" required></input>
          <input type="email" name="mail" value="" placeholder="Mail" className="contact-input" required></input>
          <input type="text" name="sujet" value="" placeholder="Sujet" className="contact-input" required></input>
          <textarea name="message" value="" placeholder="Message" className="contact-input" required></textarea>
          <button type="submit" name="envoyer" className="contact-input" id="contact-button">Envoyer</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

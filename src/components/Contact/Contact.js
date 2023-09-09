import { useContext, useRef } from 'react';
import './contact.scss';
import { ThemeContext } from '../../contexts';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';

const schema = yup
  .object({
    nom: yup.string()
      .min(3, '3 caractères min')
      .max(15, '15 caractères max')
      .required('Nom obligatoire'),
    prenom: yup.string()
      .min(3, '3 caractères min')
      .max(15, '15 caractères max.')
      .required('Prénom obligatoire'),
    mail: yup.string()
      .email('Email invalide')
      .required("Email obligatoire"),
    message: yup.string()
      .min(15, '15 caractères min')
      .max(300, '300 caractères max')
      .required('Message obligatoire'),
  })
  .required()

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9xkv74r',
      'template_j4bmokp',
      form.current,
      'h2JChoIcV98Vo9yBm')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
          }
    );
  };

  // THEMES
  const themeTools = useContext(ThemeContext);
  const themeContext = themeTools.themeContext;

  const mode = themeTools.mode;
  const themes = themeTools.themes;

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
      resolver: yupResolver(schema)
    });
  const onSubmit = (data, e) => {
    // console.log(data);
    sendEmail(e);
    reset();
  }
  // console.log(errors);

  return (
    <main className="contact-container">
      <h1 className="contact-title" style={{color: mode ? themes.gray : themeContext.theme}}>Contact</h1>
      <div className="contact-content">
        <form 
          className="contact-form"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* {errors.nom && <p className="messageError">{errors.nom.message}</p>} */}
          <input type="text"
            placeholder="Nom"
            className="contact-input"
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
            {...register("nom", errors)}
          />
          {/* {errors.prenom && <p className="messageError">{errors.prenom.message}</p>} */}
          <input type="text"
            placeholder="Prenom"
            className="contact-input"
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
            {...register("prenom")}
          />
          {/* {errors.mail && <p className="messageError">{errors.mail.message}</p>} */}
          <input type="email"
            placeholder="Mail"
            className="contact-input"
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
            {...register("mail")}
          />
          {/* {errors.message && <p className="messageError">{errors.message.message}</p>} */}
          <textarea
            placeholder="Message"
            className="contact-input"
            rows="5"
            style={{backgroundColor: themeContext.theme10, color: mode ? themes.gray : themeContext.theme}}
            {...register("message", errors)}
          />
          <button type="submit"
            name="envoyer" className="contact-input" id="contact-button"
            style={{backgroundColor: mode ? themeContext.theme30 : themeContext.theme}}
          >
            Envoyer
          </button>
          <ul className="messageError">
            {errors.nom && <li className="messageError">{errors.nom.message}</li>}
            {errors.prenom && <li className="messageError">{errors.prenom.message}</li>}
            {errors.mail && <li className="messageError">{errors.mail.message}</li>}
            {errors.message && <li className="messageError">{errors.message.message}</li>}
          </ul>
        </form>
      </div>
    </main>
  );
}

export default Contact;

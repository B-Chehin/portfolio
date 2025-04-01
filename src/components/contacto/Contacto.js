import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import fotoPerfil from '../../assets/images/bauti.jpg'; 

export const Contacto = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [formError, setFormError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;

    if (!nombre || !apellido || !email || !mensaje) {
      setFormError('Por favor completá todos los campos.');
      return;
    }

    if (!emailValid) {
      setFormError('Ingresá un email válido.');
      return;
    }

    setFormError('');
    setSending(true);

    emailjs.sendForm('service_4dpu08l', 'template_ogx834c', form.current, 'hM6E6Iyy6SzsqjWsF')
      .then(() => {
        alert('¡Mensaje enviado con éxito!');
        form.current.reset();
        setNombre('');
        setApellido('');
        setEmail('');
        setMensaje('');
        setEmailValid(true);
        setEmailTouched(false);
        setSending(false);
      }, () => {
        alert('Hubo un error. Intentalo de nuevo.');
        setSending(false);
      });
  };

  return (
    <div className="contact-page">
      <h1 className="heading">Contacto</h1>
      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="txt"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="txt"
            required
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`txt ${!emailValid && emailTouched ? 'invalid' : ''}`}
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
          />
          {emailTouched && email && !emailValid && (
            <span className="error-msg">Ingresá un email válido</span>
          )}

          <textarea
            name="mensaje"
            placeholder="Motivo de contacto"
            className="txt"
            required
            style={{ minHeight: '120px', resize: 'vertical' }}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          {formError && <span className="error-msg">{formError}</span>}

          <input
            type="submit"
            value={sending ? "Enviando..." : "Enviar"}
            className="submit"
            disabled={sending || !emailValid}
          />
        </form>

        <div className="contact-info">
          <img src={fotoPerfil} alt="Foto de Bautista" className="profile-pic" />
          <p>
            <FaEnvelope />
            <a href="mailto:chehinbautista@gmail.com">chehinbautista@gmail.com</a>
          </p>
          <p><FaMapMarkerAlt /> Buenos Aires, Argentina</p>
          <div className="social-icons">
            <a href="https://github.com/B-Chehin" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bautista-chehin-906bb9196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

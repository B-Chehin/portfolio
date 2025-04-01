import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import './servicios.css';

export const Servicios = () => {
  return (
    <div className='page servicios-page'>
      <h1 className='heading'>Servicios</h1>
      <p className='intro'>
        Estos son algunos de los servicios que ofrezco como desarrollador web, adaptándome a las necesidades de cada cliente y proyecto.
      </p>

      <section className='services'>
        <article className='service'>
          <FaPaintBrush className="icon" />
          <h2>Diseño Web</h2>
          <p>Creo interfaces modernas, atractivas y responsivas, cuidando la experiencia de usuario y el diseño visual.</p>
        </article>

        <article className='service'>
          <FaCode className="icon" />
          <h2>Desarrollo Web</h2>
          <p>Desarrollo sitios y aplicaciones desde cero usando tecnologías modernas como React, TypeScript y Node.</p>
        </article>

        <article className='service'>
          <FaMobileAlt className="icon" />
          <h2>Adaptación Responsive</h2>
          <p>Me aseguro de que tu sitio se vea y funcione perfecto en todos los dispositivos: móviles, tablets y desktop.</p>
        </article>
      </section>
    </div>
  );
};


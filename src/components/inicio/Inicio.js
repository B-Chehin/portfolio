import React from 'react'
import { Link } from 'react-router'
import './inicio.css';
import { ListadoTrabajos } from '../listadoTrabajos/ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>

      <section className='hero'>
        <div className='hero-text'>
          <h1 className='title'>
            Hola, soy Bautista Chehin, <strong className='strong'>Desarrollador Web</strong> en Buenos Aires.
          </h1>
          <p className='subtitle'>
            Ofrezco servicios de <strong className='strong'>programación</strong> y desarrollo para todo tipo de proyectos web, adaptándome a distintos stacks y necesidades.
          </p>
          <p className='subtitle'>
            Te ayudo a crear tu sitio o aplicación web, y a ganar visibilidad y relevancia en internet.
          </p>
          <Link to="/contacto" className='link'>Contacta conmigo</Link>
        </div>
      </section>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
       

        <ListadoTrabajos limite="2" />
      </section>

    </div>
  );
};
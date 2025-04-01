import React from 'react';
import { trabajos } from '../../data/trabajos';
import { Link } from 'react-router';
import './ListadoTrabajos.css';

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => (
            <article key={trabajo.id} className='work-item'>
              <Link to={"/proyecto/" + trabajo.id} className="img-link">
                <div className='mask'>
                  <img className="img" src={"../images/" + trabajo.id + ".png"} alt={trabajo.nombre} />
                </div>
              </Link>
              <div className="work-content">
                <span className='category'>{trabajo.categorias}</span>
                <h2 className='url-txt'>
                  <Link className='url' to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
                </h2>
                <h3 className='tech'>{trabajo.tecnologias}</h3>
              </div>
            </article>
          ))
        }
      </section>
  );
};
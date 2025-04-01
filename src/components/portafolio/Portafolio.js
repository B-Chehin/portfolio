import React from 'react';
import { Link } from 'react-router';
import './portafolio.css';
import {ListadoTrabajos} from "../listadoTrabajos/ListadoTrabajos.js";

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <ListadoTrabajos></ListadoTrabajos>
    </div>
  );
};


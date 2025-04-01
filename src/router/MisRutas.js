import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import { Inicio } from "../components/inicio/Inicio";
import { Portafolio } from "../components/portafolio/Portafolio";
import { Servicios } from "../components/servicios/Servicios";
import { Curriculum } from "../components/curriculum/Curriculum";
import { Contacto } from "../components/contacto/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/proyecto/Proyecto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */ }
        <HeaderNav></HeaderNav>


        {/* CONTENIDO CENTRAL*/ }
        <section className='content'>
            <Routes>
              <Route path='/' element={<Navigate to="/inicio" />}></Route>
              <Route path='/inicio' element={<Inicio/>}></Route>
              <Route path='/portafolio' element={<Portafolio/>}></Route>
              <Route path='/servicios' element={<Servicios/>}></Route>
              <Route path='/curriculum' element={<Curriculum/>}></Route>
              <Route path='/contacto' element={<Contacto/>}></Route>
              <Route path='/proyecto/:id' element={<Proyecto/>}></Route>
              <Route path='*' element={
                <div className='page'>
                  <h1 className='heading'>Error 404</h1>
                </div>  
              }></Route>
            </Routes>
        </section>
        
        {/* FOOTER */ }
        <Footer></Footer>
    </BrowserRouter>
  )
}

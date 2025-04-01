import React from 'react'
import './Curriculum.css'
import Logouba from "../../assets/images/uba.png";
import Logoort from "../../assets/images/ort.png";
import Argentina from "../../assets/images/argentina.png";
import UK from "../../assets/images/reinounido.png";
import Udemy from "../../assets/images/udemy.png";


export const Curriculum = () => {
  return (
    <div className="curriculum-page">
      <h1 className="heading">Curriculum</h1>

      <div className="curriculum-section">
        <h2>Experiencia</h2>

          <div className="job">
            <h3 className="job-title">Frontend Developer</h3>
            <p className="job-company">Cedeira · Cliente: Banco Galicia</p>
            <p className="job-date">Nov 2021 - Actualidad (3 año +)</p>
            <p className="job-tech">ReactJS · TypeScript · SPA · CSS · HTML</p>
            <ul className="job-tasks">
              <li>Diseño y desarrollo de Single Page Applications con Bricks (framework interno del banco).</li>
              <li>Integración de servicios Backend y creación de vistas responsivs.</li>
              <li>Mantenimiento de estilos y lógica para vistas de productos financieros.</li>
            </ul>
          </div>

          <div className="job">
            <h3 className="job-title">Backend Developer</h3>
            <p className="job-company">Leafnoise · Clientes: AFIP y ANSES</p>
            <p className="job-date">Fen 2020 - Nov 2021 (1 año 8 meses)</p>
            <p className="job-tech">Python · Flask · MongoDB</p>
            <ul className="job-tasks">
              <li>Desarrollo de formularios con validaciones automáticas y almacenamiento de respuestas.</li>
              <li>Diseño de APIs RESTful con Flask y persistencia en MongoDB.</li>
            </ul>
          </div>
        </div>

      <div className="curriculum-section">
        <h2>Conocimientos</h2>

        <div className="skill">
          <h3 className="skill-name">React · TypeScript · JavaScript</h3>
          <p className="skill-time">3 años</p>
          <p className="skill-desc">
            Desarrollo de SPAs en proyectos bancarios y públicos. Consumo de APIs, manejo de estado, routing, formularios y lógica de negocio. Uso de librerías como React Router, Formik y contextos.
          </p>
        </div>

        <div className="skill">
          <h3 className="skill-name">Python · Flask · MongoDB</h3>
          <p className="skill-time">2 años</p>
          <p className="skill-desc">
            Construcción de APIs REST para formularios dinámicos, validaciones automáticas y persistencia de datos. Integración con Frontend y despliegue en servidores internos.
          </p>
        </div>

        <div className="skill">
          <h3 className="skill-name">HTML · CSS · Bricks · Angular</h3>
          <p className="skill-time">3 años</p>
          <p className="skill-desc">
            Maquetación accesible y responsive. Experiencia con frameworks internos (Bricks) y externos (Angular) para renderizado de componentes reutilizables.
          </p>
        </div>
      </div>

      <div className="curriculum-section">
        <h2>Educación</h2>

        <div className="education-item">
          <img
            src={Logoort}
            alt="Logo secundaria"
            className="education-logo"
          />
          <div className="education-content">
            <h3 className="education-title">Secundaria Técnica - ORT</h3>
            <p className="education-detail">
              Tecnología/Técnico de ingeniería eléctrica, electrónica y de comunicaciones
            </p>
          </div>
        </div>

        <div className="education-item">
          <img
            src={Logouba}
            alt="Logo UBA"
            className="education-logo"
          />
          <div className="education-content">
            <h3 className="education-title">Lic. en Ciencias de la Computación - UBA</h3>
            <p className="education-detail">
              Cursando (3er año)
            </p>
          </div>
        </div>
      </div>

      <div className="curriculum-section">
        <h2>Idiomas</h2>

        <div className="language-item">
          <img src={Argentina} alt="Bandera Argentina" className="language-icon" />
          <div className="language-content">
            <h3 className="language-name">Español</h3>
            <p className="language-level">Nativo</p>
          </div>
        </div>

        <div className="language-item">
          <img src={UK} alt="Bandera Reino Unido" className="language-icon" />
          <div className="language-content">
            <h3 className="language-name">Inglés</h3>
            <p className="language-level">Conversacional avanzado (B2+)</p>
          </div>
        </div>
      </div>

      <div className="curriculum-section">
        <h2>Cursos</h2>

        <a
          href="https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/"
          target="_blank"
          rel="noopener noreferrer"
          className="course-item"
        >
          <img src={Udemy} alt="Udemy" className="course-logo" />
          <div className="course-content">
            <h3 className="course-title">Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+</h3>
            <p className="course-platform">Udemy</p>
          </div>
        </a>

        <a
          href="https://www.udemy.com/course/typescript-sin-fronteras-guia-definitiva/?couponCode=25BBPMXPLOYCTRL"
          target="_blank"
          rel="noopener noreferrer"
          className="course-item"
        >
          <img src={Udemy} alt="Udemy" className="course-logo" />
          <div className="course-content">
            <h3 className="course-title">TypeScript sin fronteras: guía definitiva</h3>
            <p className="course-platform">Udemy</p>
          </div>
        </a>
      </div>


    </div>
  )
}
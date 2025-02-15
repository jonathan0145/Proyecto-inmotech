import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Carrousel from './Carrousel'; // Importación por defecto

function Inicio() {
    return (
        <div className="container contenido">
        <div className="row fila">
          <div className="col-12 columna">
            <Carrousel />
          </div>
        </div>
        <div className="row fila">
          <div className="col-12 columna">
            <h2>Sección 2</h2>
            <p>Contenido de la sección 2.</p>
          </div>
        </div>
        <div className="row fila">
          <div className="col-12 columna">
            <h2>Sección 3</h2>
            <p>Contenido de la sección 3.</p>
          </div>
        </div>
        <div className="row fila">
          <div className="col-12 columna">
            <h2>Sección 4</h2>
            <p>Contenido de la sección 4.</p>
          </div>
        </div>
        <div className="row fila">
          <div className="col-12 columna">
            <h2>Sección 5</h2>
            <p>Contenido de la sección 5.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Inicio;
import React from 'react';
import { Link, useLocation} from 'react-router-dom';

/*estilos css */
import '../styles/Navegacion.css';

function Navegacion() {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <nav className='navegacion navbar navbar-expand-lg navbar-light bg-light menu-todo' id='contenedor1'>
      <div className='container menu-todo'>
        <Link className="titulo color-letras navbar-brand" to="/">INMOTECH</Link>
        <ul className="navbar-nav">
          <li className={` nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="color-letras nav-link" to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Inicio
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}>
            <Link className="color-letras nav-link"
            to="/sobre-nosotros"
            aria-current={location.pathname === '/sobre-nosotros' ? 'page' : undefined}
            >
            Sobre Nosotros
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
            <Link className="color-letras nav-link"
            to="/servicios"
            aria-current={location.pathname === '/servicios' ? 'page' : undefined}
            >
            Servicios
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/herramientas' ? 'active' : ''}`}>
            <Link className="color-letras nav-link"
            to="/herramientas"
            aria-current={location.pathname === '/herramientas' ? 'page' : undefined}
            >
            Herramientas de Publicación
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contacto' ? 'active' : ''}`} >
            <Link className="color-letras nav-link"
            to="/contacto"
            aria-current={location.pathname === '/contacto' ? 'page' : undefined}
            >
            Contacto
            </Link>
          </li>
        </ul>
      </ div>
    </nav>
  );
}

export default Navegacion;
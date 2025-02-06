import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function Navegacion() {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <nav className='navegacion navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className="navbar-brand" to="/">Mi Sitio</Link>
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Inicio
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}>
            <Link className="nav-link"
            to="/sobre-nosotros"
            aria-current={location.pathname === '/sobre-nosotros' ? 'page' : undefined}
            >
            Sobre Nosotros
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
            <Link className="nav-link"
            to="/servicios"
            aria-current={location.pathname === '/servicios' ? 'page' : undefined}
            >
            Servicios
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/herramientas' ? 'active' : ''}`}>
            <Link className="nav-link"
            to="/herramientas"
            aria-current={location.pathname === '/herramientas' ? 'page' : undefined}
            >
            Herramientas de Publicación
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contacto' ? 'active' : ''}`} >
            <Link className="nav-link"
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
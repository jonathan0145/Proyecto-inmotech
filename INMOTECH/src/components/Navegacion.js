import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function Navegacion() {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <nav className='navegacion'>
        <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
            Inicio
          </Link>
        </li>
        <li className={location.pathname === '/sobre-nosotros' ? 'active' : ''}>
          <Link
            to="/sobre-nosotros"
            aria-current={location.pathname === '/sobre-nosotros' ? 'page' : undefined}
          >
            Sobre Nosotros
          </Link>
        </li>
        <li className={location.pathname === '/servicios' ? 'active' : ''}>
          <Link
            to="/servicios"
            aria-current={location.pathname === '/servicios' ? 'page' : undefined}
          >
            Servicios
          </Link>
        </li>
        <li className={location.pathname === '/herramientas' ? 'active' : ''}>
          <Link
            to="/herramientas"
            aria-current={location.pathname === '/herramientas' ? 'page' : undefined}
          >
            Herramientas de Publicación
          </Link>
        </li>
        <li className={location.pathname === '/contacto' ? 'active' : ''}>
          <Link
            to="/contacto"
            aria-current={location.pathname === '/contacto' ? 'page' : undefined}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
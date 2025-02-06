import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/*bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
// import { Container, Row, Col } from 'react-bootstrap';

/*css */
// import './styles/index.css';

/* componentes */
import Navegacion from './components/Navegacion';

/* Componentes para las páginas */
import Inicio from './components/Inicio'; // Importa el componente Inicio
import SobreNosotros from './components/SobreNosotros'; // Importa el componente SobreNosotros
import Servicios from './components/Servicios'; // Importa el componente Servicios
import HerramientasDePublicacion from './components/HerramientasDePublicacion'; // Importa el componente HerramientasDePublicacion
import Contacto from './components/Contacto'; // Importa el componente Contacto

// //?aplicar estilo css en las etiquetas
// // style={{ background: 'blue', fontSize: '04px' }}

function App() {
  return (
    <Router>
        <div>
            <Navegacion />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/herramientas" element={<HerramientasDePublicacion />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
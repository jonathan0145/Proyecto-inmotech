import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import { Container, Row, Col } from 'react-bootstrap';

/*componentes*/
import ImageCarousel from './components/ImageCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <ImageCarousel />
        <header>
            <img src='./public/imagenes/logo/logo_200x200.png'/>
            <h1>Inmotech</h1>
        </header>
        <div>
            <h1>Hola, mundo desde React!</h1>
        </div>
        <div>
            <h1>Hola, mundo desde React!</h1>
        </div>
        <div>
            <h1>Hola, mundo desde React!</h1>
        </div>
        <div>
            <h1>Hola, mundo desde React!</h1>
        </div>
        <div>
            <h1>Hola, mundo desde React!</h1>
        </div>
    </div>
);
//?aplicar estilo css en las etiquetas
// style={{ background: 'blue', fontSize: '04px' }}

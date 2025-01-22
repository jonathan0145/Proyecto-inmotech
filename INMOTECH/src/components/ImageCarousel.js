//! react
import React, {useState} from 'react';

//! estilo
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/imageCarousel.css';

function ImageCarousel() {
    const [images, setImages] = useState([
        { src: './../public/imagenes/carousel/1.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 1' },
        { src: './../public/imagenes/carousel/2.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 2' },
        { src: './../public/imagenes/carousel/3.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 3' },
        { src: './../public/imagenes/carousel/4.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 4' },
        { src: './../public/imagenes/carousel/5.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 5' },
        { src: './../public/imagenes/carousel/6.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 6' },
        { src: './../public/imagenes/carousel/7.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 7' },
        { src: './../public/imagenes/carousel/8.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 8' },
        { src: './../public/imagenes/carousel/9.webp', alt: 'Imagen 1', text: 'Texto de la imagen 9' },
        { src: './../public/imagenes/carousel/10.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 10' },
        { src: './../public/imagenes/carousel/11.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 11' },
        { src: './../public/imagenes/carousel/12.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 12' },
        { src: './../public/imagenes/carousel/13.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 13' },
        { src: './../public/imagenes/carousel/14.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 14' },
        { src: './../public/imagenes/carousel/15.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 15' },
        // ... Agrega más objetos con src, alt y text
    ]);
    
    return (
        <Carousel className="cr" interval={1000} controls indicators>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt}
                        style={{ height: '798px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>{image.text}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
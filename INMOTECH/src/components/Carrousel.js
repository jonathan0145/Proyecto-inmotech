// App.js (o tu componente principal)
import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import ImageUploader from './ImageUploader';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
// import './styles/imageCarousel.css'; // Importa tus estilos CSS

function Carousel() {
  const [images, setImages] = useState([
    { src: './imagenes/carousel/1.jpg', alt: 'Imagen 1', text: 'Texto de la imagen 1' },
    { src: './imagenes/carousel/2.jpg', alt: 'Imagen 2', text: 'Texto de la imagen 2' },
    { src: './imagenes/carousel/3.jpg', alt: 'Imagen 3', text: 'Texto de la imagen 3' },
    { src: './imagenes/carousel/4.jpg', alt: 'Imagen 4', text: 'Texto de la imagen 4' },
    { src: './imagenes/carousel/5.jpg', alt: 'Imagen 5', text: 'Texto de la imagen 5' },
    { src: './imagenes/carousel/6.jpg', alt: 'Imagen 6', text: 'Texto de la imagen 6' },
    { src: './imagenes/carousel/7.jpg', alt: 'Imagen 7', text: 'Texto de la imagen 7' },
    { src: './imagenes/carousel/8.jpg', alt: 'Imagen 8', text: 'Texto de la imagen 8' },
    { src: './imagenes/carousel/9.webp', alt: 'Imagen 9', text: 'Texto de la imagen 9' },
    { src: './imagenes/carousel/10.jpg', alt: 'Imagen 10', text: 'Texto de la imagen 10' },
    { src: './imagenes/carousel/11.jpg', alt: 'Imagen 11', text: 'Texto de la imagen 11' },
    { src: './imagenes/carousel/12.jpg', alt: 'Imagen 12', text: 'Texto de la imagen 12' },
    { src: './imagenes/carousel/13.jpg', alt: 'Imagen 13', text: 'Texto de la imagen 13' },
    { src: './imagenes/carousel/14.jpg', alt: 'Imagen 14', text: 'Texto de la imagen 14' },
    { src: './imagenes/carousel/15.jpg', alt: 'Imagen 15', text: 'Texto de la imagen 15' },
  ]);

  const handleImageUpdate = (index, newSrc, newText) => {
    const updatedImages = [...images];

    if (index >= 0 && index < updatedImages.length) {
      updatedImages[index] = { src: newSrc, alt: `Imagen ${index + 1}`, text: newText };
    } else if (index === updatedImages.length) { // Agregar nueva imagen
      updatedImages.push({ src: newSrc, alt: `Imagen ${index + 1}`, text: newText });
    } else {
      alert("Índice fuera de rango. Ingrese un índice válido o el siguiente índice disponible para agregar una nueva imagen.");
      return; // No actualizar el estado si el índice es inválido
    }

    setImages(updatedImages);
  };

  return (
    <div className="container"> {/* Añade un contenedor para centrar el contenido */}
      <h1>Mi Carrusel Dinámico</h1>
      <ImageCarousel images={images} />
      <ImageUploader onImageUpdate={handleImageUpdate} />
    </div>
  );
}

export default Carousel;
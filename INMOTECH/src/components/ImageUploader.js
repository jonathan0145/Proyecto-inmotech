// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// function ImageUploader({ onImageUpdate }) {
//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState('');
//   const [index, setIndex] = useState(0);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleUpdate = () => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         onImageUpdate(index, reader.result, title);
//         setImage(null);
//         setTitle('');
//       };
//       reader.readAsDataURL(image);
//     }
//   };

//   return (
//     <Form>
//       <Form.Group controlId="imageIndex">
//         <Form.Label>Índice de imagen</Form.Label>
//         <Form.Control 
//           type="number" 
//           placeholder="Índice de imagen" 
//           value={index} 
//           onChange={e => setIndex(parseInt(e.target.value))} 
//         />
//       </Form.Group>

//       <Form.Group controlId="imageFile">
//         <Form.Label>Seleccionar imagen</Form.Label>
//         <Form.Control type="file" onChange={handleImageChange} />
//       </Form.Group>

//       <Form.Group controlId="imageTitle">
//         <Form.Label>Título de la imagen</Form.Label>
//         <Form.Control 
//           type="text" 
//           placeholder="Título de la imagen" 
//           value={title} 
//           onChange={handleTitleChange} 
//         />
//       </Form.Group>

//       <Button variant="primary" onClick={handleUpdate}>
//         Actualizar imagen
//       </Button>
//     </Form>
//   );
// }

// export default ImageUploader;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ImageUploader({ onImageUpdate }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState(0);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpdate(index, reader.result, title);
        setImage(null);
        setTitle('');
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <Form>
      <Form.Group controlId="imageIndex">
        <Form.Label>Índice de imagen</Form.Label>
        <Form.Control
          type="number"
          placeholder="Índice de imagen"
          value={index}
          onChange={e => setIndex(parseInt(e.target.value))}
        />
      </Form.Group>

      <Form.Group controlId="imageFile">
        <Form.Label>Seleccionar imagen</Form.Label>
        <Form.Control type="file" onChange={handleImageChange} />
      </Form.Group>

      <Form.Group controlId="imageTitle">
        <Form.Label>Título de la imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Título de la imagen"
          value={title}
          onChange={handleTitleChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleUpdate}>
        Actualizar imagen
      </Button>
    </Form>
  );
}

export default ImageUploader;
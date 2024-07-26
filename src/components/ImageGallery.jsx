// src/components/ImageGallery.jsx
import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery image ${index}`} className="w-full h-auto rounded shadow-md" />
      ))}
    </div>
  );
};

export default ImageGallery;

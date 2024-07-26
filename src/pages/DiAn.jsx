// src/pages/DiAn.jsx
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const DiAn = () => {
  const images = importAll(import.meta.glob('../assets/DiAn/*.{png,jpg,jpeg,svg}', { eager: true }));

  function importAll(r) {
    return Object.values(r).map((module) => module.default || module);
  }

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Hội Liên Hiệp Phụ Nữ Thành Phố Dĩ An</h1>
      <p className="text-lg text-gray-700 mb-6">Sản phẩm khởi nghiệp của Hội Liên Hiệp Phụ Nữ Thành Phố Dĩ An.</p>
      <ImageGallery images={images} />
    </div>
  );
};

export default DiAn;

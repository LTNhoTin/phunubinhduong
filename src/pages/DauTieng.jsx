// src/pages/DauTieng.jsx
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const DauTieng = () => {
  const images = importAll(import.meta.glob('../assets/DauTieng/*.{png,jpg,jpeg,svg}', { eager: true }));

  function importAll(r) {
    return Object.values(r).map((module) => module.default || module);
  }

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Hội Liên Hiệp Phụ Nữ Huyện Dầu Tiếng</h1>
      <p className="text-lg text-gray-700 mb-6">Sản phẩm khởi nghiệp của Hội Liên Hiệp Phụ Nữ Huyện Dầu Tiếng.</p>
      <ImageGallery images={images} />
    </div>
  );
};

export default DauTieng;

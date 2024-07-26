// src/pages/TrungTam.jsx
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const TrungTam = () => {
  const images = importAll(import.meta.glob('../assets/TrungTam/*.{png,jpg,jpeg,svg}', { eager: true }));

  function importAll(r) {
    return Object.values(r).map((module) => module.default || module);
  }

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Trung Tâm Hỗ Trợ Phụ Nữ Tỉnh Bình Dương</h1>
      <p className="text-lg text-gray-700 mb-6">Sản phẩm khởi nghiệp của Trung tâm hỗ trợ phụ nữ tỉnh Bình Dương.</p>
      <ImageGallery images={images} />
    </div>
  );
};

export default TrungTam;

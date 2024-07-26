// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="menu-button text-blue-500 hover:text-blue-700 focus:outline-none relative z-10 mr-4">
              <svg className="w-8 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h1 className="flex-grow text-center text-xl font-bold text-blue-700">Ngày Hội Khởi Nghiệp Phụ Nữ Bình Dương</h1>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={closeMenu}></div>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transform top-0 left-0 w-64 bg-white shadow-70 shadow-md fixed h-full overflow-auto ease-in-out transition-all duration-300 z-20`}>
        <nav className="flex flex-col p-4 space-y-2">
          <Link to="/bencat" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Thành Phố Bến Cát</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/dautieng" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Huyện Dầu Tiếng</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/dian" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Thành Phố Dĩ An</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/phugiao" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Huyện Phú Giáo</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/tanyen" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Thành Phố Tân Uyên</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/thudaumot" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Thành Phố Thủ Dầu Một</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/thuanan" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Thành Phố Thuận An</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/bactanuyen" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Huyện Bắc Tân Uyên</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/baubang" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Hội Liên Hiệp Phụ Nữ Huyện Bàu Bàng</Link>
          <div className="border-b border-gray-200"></div>
          <Link to="/trungtamhotrophunubinhduong" className="text-gray-900 hover:bg-blue-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={closeMenu}>Trung Tâm Hỗ Trợ Phụ Nữ Bình Dương</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

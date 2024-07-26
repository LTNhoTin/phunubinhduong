// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BenCat from './pages/BenCat';
import DauTieng from './pages/DauTieng';
import DiAn from './pages/DiAn';
import PhuGiao from './pages/PhuGiao';
import TanUyen from './pages/TanUyen';
import ThuDauMot from './pages/ThuDauMot';
import ThuanAn from './pages/ThuanAn';
import BacTanUyen from './pages/BacTanUyen';
import BauBang from './pages/BauBang';
import TrungTam from './pages/TrungTam';

const App = () => {
  return (
    <Router basename="/phunubinhduong">
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Routes>
              <Route path="/bencat" element={<BenCat />} />
              <Route path="/dautieng" element={<DauTieng />} />
              <Route path="/dian" element={<DiAn />} />
              <Route path="/phugiao" element={<PhuGiao />} />
              <Route path="/tanyen" element={<TanUyen />} />
              <Route path="/thudaumot" element={<ThuDauMot />} />
              <Route path="/thuanan" element={<ThuanAn />} />
              <Route path="/bactanuyen" element={<BacTanUyen />} />
              <Route path="/baubang" element={<BauBang />} />
              <Route path="/trungtamhotrophunubinhduong" element={<TrungTam />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LanguageListPage from './pages/LanguageListPage';
// 他の画面が増えたらここにimport

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageListPage />} />
        {/* 例: <Route path="/detail/:id" element={<LanguageDetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

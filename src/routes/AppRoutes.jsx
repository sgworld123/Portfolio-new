import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import RentEngine from '../pages/RentEngine/RentEngine';
import MoveWise from '../pages/MoveWise/MoveWise';
import ChatSphere from '../pages/ChatSphere/ChatSphere';
import AyurSutra from '../pages/Ayursutra/AyurSutra';
import Privpol from '../pages/LegalPages/Privpol';
import TOS from '../pages/LegalPages/TOS';
import { NotFoundPage } from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="rentengine" element={<RentEngine />} />
        <Route path="movewise" element={<MoveWise />} />
        <Route path="chatsphere" element={<ChatSphere />} />
        <Route path="ayursutra" element={<AyurSutra />} />
        <Route path="privacy-policy" element={<Privpol />} />
        <Route path="terms-of-service" element={<TOS />} />
      </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
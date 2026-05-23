import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import RentEngine from '../pages/RentEngine';
import MoveWise from '../pages/MoveWise';
import ChatSphere from '../pages/ChatSphere';
import AyurSutra from '../pages/AyurSutra';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="rentengine" element={<RentEngine />} />
        <Route path="movewise" element={<MoveWise />} />
        <Route path="chatsphere" element={<ChatSphere />} />
        <Route path="ayursutra" element={<AyurSutra />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
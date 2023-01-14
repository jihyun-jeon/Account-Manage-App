import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import AppRouter from './AppRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const RoutesPage = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RoutesPage;

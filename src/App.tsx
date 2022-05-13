import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
// pages
import LoginPage from './pages/LoginPage';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

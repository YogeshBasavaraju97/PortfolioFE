import { useState } from 'react';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

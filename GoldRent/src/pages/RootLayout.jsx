import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Strona główna</title>
      </Helmet>
      <Header />
      <main>
        <Outlet />  
      </main>
    </HelmetProvider>
  );
};

export default RootLayout;

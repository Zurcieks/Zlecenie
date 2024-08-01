import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

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
      <Footer className="mt-auto"/>
    </HelmetProvider>
  );
};

export default RootLayout;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css'
import Investors from './pages/Investors';
import Developers from './pages/Developers';
import Owner from './pages/Owner';
import Reservations from './pages/Reservations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Services", element: <Services /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Investors", element: <Investors /> },
      { path: "/Developers", element: <Developers /> },
      { path: "/Owner", element: <Owner /> },
      { path: "/Reservations", element: <Reservations /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

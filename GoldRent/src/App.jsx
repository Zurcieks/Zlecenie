import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css'
import Investors from './pages/Investors';
import Developers from './pages/Developers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "investors", element: <Investors /> },
      { path: "developers", element: <Developers /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
} from 'react-router-dom';
import Index from '../Components/Index.Component.js';
import Cv from '../Components/CV.Component.js';
import Navbar from '../Components/NavBar/Navbar.Component.js';
import Footer from '../Components/Footer/Footer.Component.js';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Curriculum" element={<Cv />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

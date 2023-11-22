import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacto from "../Pages/Contacto/Contacto";
import Nosotros from "../Pages/Nosotros/Nosotros";
import Productos from "../Pages/Productos/Productos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Productos" element={<Productos />} />
        <Route path="Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

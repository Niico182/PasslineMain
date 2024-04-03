import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Show from "./pages/Show";
import Perfil from "./pages/perfil";
import Entradas from "./pages/entradas";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Entradas" element={<Entradas />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

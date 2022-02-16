import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../home/about/About";
import Breakingbad from "../home/breakingbad/Breakingbad";
import Cocteles from "../home/cocteles/Cocteles";
import Favoritos from "../home/favoritos/Favoritos";
import Pokemons from "../home/pokemons/Pokemons";
import Home from "./../home/Home";
const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index  element={<About/>}/>
          <Route path="/Breakingbad" element={<Breakingbad />} />
          <Route path="/Cocteles" element={<Cocteles />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Pokemons" element={<Pokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default DashboardRoutes;

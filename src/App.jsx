import React from "react";
import Home from "@components/home/Home";
import Movies from "@components/movies/Movies";
import Navbar from "@components/navbar/Navbar";
import Detail from "@components/detail/Detail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
};

export default App;

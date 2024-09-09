import React from "react";
import Home from "@components/home/Home";
import Movies from "@components/movies/Movies";
import Series from "@components/series/Series";
import Navbar from "@components/navbar/Navbar";
import Detail from "@components/detail/Detail";
import Result from "@components/search/Result";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar key={location.pathname} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
};

export default App;

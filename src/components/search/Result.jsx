import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ItemDetail from "@components/utils/ItemDetail";
import { fetchMovieFindAll } from "@services/movie.jsx";
import useFetch from "@hooks/useFetch.jsx";

const Result = () => {
  const location = useLocation();
  const { cadenaBusqueda } = location.state || {};

  const { data: oMovies, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(() => fetchMovieFindAll())
      .catch((error) => console.error(error))
      .finally(() => {});

    if (typeof window.initializePlayer === "function") {
      window.initializePlayer();
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cadenaBusqueda ? <h1 className="home__title">Resultado: &quot;{cadenaBusqueda}&quot;</h1> : <h1 className="home__title"> Resultado: &quot; &quot; </h1>}
            </div>
          </div>
        </div>

        <div className="catalog">
          <div className="container">
            <div className="row">
              {oMovies.map((movie) => (
                <div key={movie.idPelicula} className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <ItemDetail
                    key={movie.idPelicula}
                    image={"/img/movies/" + movie.imagenPortada}
                    title={movie.titulo}
                    gener={""}
                    star={movie.puntos}
                    idMovie={movie.idPelicula}
                    style={{ marginRight: "0px" }}
                  />
                </div>
              ))}

              <div className="col-12">
                <ul className="paginator">
                  <li className="paginator__item paginator__item--prev">
                    <a href="#">
                      <i className="icon ion-ios-arrow-back"></i>
                    </a>
                  </li>
                  <li className="paginator__item paginator__item--active">
                    <a href="#">1</a>
                  </li>
                  <li className="paginator__item">
                    <a href="#">2</a>
                  </li>
                  <li className="paginator__item">
                    <a href="#">3</a>
                  </li>
                  <li className="paginator__item">
                    <a href="#">4</a>
                  </li>
                  <li className="paginator__item paginator__item--next">
                    <a href="#">
                      <i className="icon ion-ios-arrow-forward"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;

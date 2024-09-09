import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/utils/Loading";
import DetailInfo from "@components/detail/DetailInfo";
// import DetailVideo from "@components/detail/DetailVideo";
import DetailDevices from "@components/detail/DetailDevices";
import DetailComment from "@components/detail/DetailComment";
import { fetchMovieByxId } from "@services/movie.jsx";
import useFetch from "@hooks/useFetch.jsx";

const Detail = () => {
  const { id } = useParams();
  const { data: oMovie, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(() => fetchMovieByxId(id));

    if (typeof window.initializePlayer === "function") {
      window.initializePlayer();
    }
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) {
    return <div>{error && <p>Error loading movie: {error.message}</p>}</div>;
  }

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="home__title">{oMovie.titulo}</h1>
            </div>

            <div className="col-12">
              <div className="card card--details card--series">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <div className="card__cover">
                      <img id="portada" src={`/img/movies/${oMovie.imagenPortada}`} alt={oMovie.imagenPortada} />
                    </div>
                  </div>

                  <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                    <div className="card__content">
                      <DetailInfo star={oMovie.puntos} year={oMovie.anoCreacion} duration={oMovie.duracion} />

                      <div className="card__description card__description--details">{oMovie.descripcion}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-12">{/* <DetailVideo /> */}</div>
            <div className="col-12">
              <DetailDevices />
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                      Comentarios
                    </a>
                  </li>
                </ul>

                <div className="content__mobile-tabs" id="content__mobile-tabs">
                  <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <input type="button" id="btn2" value="Comentarios" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                  <div className="row">
                    <div className="col-12">
                      <DetailComment idPelicula={Number(id)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;

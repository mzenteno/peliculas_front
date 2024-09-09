import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ItemDetail from "@components/utils/ItemDetail";
import { fetchMovieFindAll } from "@services/movie.jsx";
import useFetch from "@hooks/useFetch.jsx";

const responsive = {
  ultraWideScreen: {
    breakpoint: { max: 5000, min: 1500 },
    items: 6,
  },
  superLargeDesktop: {
    breakpoint: { max: 1500, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 990 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 990, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 300 },
    items: 2,
  },
  SmallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
  },
};

const Premiere = ({ setLoaded }) => {
  const { data: oMovies, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(() => fetchMovieFindAll())
      .catch((error) => console.error(error))
      .finally(() => {
        setLoaded(true);
      });

    if (typeof window.initializePlayer === "function") {
      window.initializePlayer();
    }
  }, [fetchData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="home__title">Estrenos</h1>
        </div>

        <div className="col-12">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {oMovies.map((movie) => (
              <ItemDetail key={movie.idPelicula} image={"/img/movies/" + movie.imagenPortada} title={movie.titulo} gener={""} star={movie.puntos} idMovie={movie.idPelicula} />
            ))}
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

Premiere.propTypes = {
  setLoaded: PropTypes.func.isRequired,
};

export default Premiere;

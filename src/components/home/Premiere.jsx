import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ItemDetail from "@components/utils/ItemDetail";
import styles from "@components/home/Home.module.css";
import { fetchMovieFindAll } from "@services/movie.jsx";
import useFetch from "@hooks/useFetch.jsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Premiere = ({ setLoaded }) => {
  const { data: oMovies, loading, error, fetchData } = useFetch();

  useEffect(() => {
    console.log("marcelo");
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
          <h1 className={styles.home__title}>ESTRENOS</h1>
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

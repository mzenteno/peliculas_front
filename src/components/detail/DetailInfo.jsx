import React from "react";
import PropTypes from "prop-types";

const DetailInfo = ({ star, year, duration }) => {
  return (
    <>
      <div className="card__wrap">
        <span className="card__rate">
          <i className="icon ion-ios-star"></i>
          {star}
        </span>

        <ul className="card__list">
          <li>HD</li>
          {/* <li>16+</li> */}
        </ul>
      </div>

      <ul className="card__meta">
        <li>
          <span>Genero:</span> <a href="#">Action</a>
          <a href="#">Triler</a>
        </li>
        <li>
          <span>año de lanzamiento:</span> {year}
        </li>
        <li>
          <span>Duración:</span> {duration} min
        </li>
        <li>
          <span>País:</span> <a href="#">USA</a>{" "}
        </li>
      </ul>
    </>
  );
};

DetailInfo.propTypes = {
  star: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default DetailInfo;

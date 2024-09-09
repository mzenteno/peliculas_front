import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemDetail = ({ image, title, gener, star, idMovie, style }) => {
  return (
    <div className="card" style={style}>
      <div className="card__cover">
        <img src={image} alt="" />
        <Link to={`/detail/${idMovie}`} className="card__play">
          <i className="icon ion-ios-play"></i>
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <Link to={`/detail/${idMovie}`}>{title}</Link>
        </h3>
        <span className="card__category">
          <a href="#">Action</a>
          <a href="#">Triler</a>
        </span>
        <span className="card__rate">
          <i className="icon ion-ios-star"></i>
          {star}
        </span>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  gener: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  idMovie: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default ItemDetail;

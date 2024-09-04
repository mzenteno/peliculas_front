import React from "react";
import PropTypes from "prop-types";
import styles from "@components/utils/Card.module.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ image, title, gener, star, idMovie }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__cover}>
        <img src={image} alt="" />
        <Link to={`/detail/${idMovie}`} className={styles.card__play}>
          <i className="icon ion-ios-play"></i>
        </Link>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>
          <Link to={`/detail/${idMovie}`}>{title}</Link>
        </h3>
        <span className={styles.card__category}>
          <a href="#">Action</a>
          <a href="#">Triler</a>
        </span>
        <span className={styles.card__rate}>
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
};

export default ItemDetail;

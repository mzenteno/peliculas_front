import React, { useState } from "react";
import PropTypes from "prop-types";
import useFetch from "@hooks/useFetch";
import { fetchComentarioAdicionarMeGusta, fetchComentarioAdicionarNoMeGusta } from "@services/comentario.jsx";

const DetailCommentItem = ({ idComentario, className, usuario, fecha, hora, descripcion, meGusta, noMeGusta }) => {
  const [contadorMeGusta, setContadorMeGusta] = useState(meGusta);
  const [contadorNoMeGusta, setContadorNoMeGusta] = useState(noMeGusta);
  const { fetchData } = useFetch();

  const meGustaOnClick = () => {
    if (contadorMeGusta > 99) return;

    fetchData(() => fetchComentarioAdicionarMeGusta(idComentario))
      .then((data) => {
        setContadorMeGusta(data.meGusta);
      })
      .catch((err) => {
        console.error("Error al darle me gusta al comentario:", err);
      });
  };

  const noMeGustaOnClick = () => {
    if (contadorNoMeGusta > 99) return;

    fetchData(() => fetchComentarioAdicionarNoMeGusta(idComentario))
      .then((data) => {
        setContadorNoMeGusta(data.noMeGusta);
      })
      .catch((err) => {
        console.error("Error al darle no me gusta al comentario:", err);
      });
  };

  return (
    <li className={className}>
      <div className="comments__autor">
        <img className="comments__avatar" src="/img/user.png" alt="" />
        <span className="comments__name">{usuario}</span>
        <span className="comments__time">
          {fecha}, {hora}
        </span>
      </div>
      <p className="comments__text">{descripcion}</p>
      <div className="comments__actions">
        <div className="comments__rate">
          <button type="button" onClick={meGustaOnClick}>
            <i className="icon active ion-md-thumbs-up"></i>
            {contadorMeGusta}
          </button>

          <button type="button" onClick={noMeGustaOnClick}>
            {contadorNoMeGusta}
            <i className="icon ion-md-thumbs-down"></i>
          </button>
        </div>

        <button type="button">
          <i className="icon ion-ios-share-alt"></i>Responder
        </button>
      </div>
    </li>
  );
};

DetailCommentItem.propTypes = {
  idComentario: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  usuario: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  meGusta: PropTypes.number.isRequired,
  noMeGusta: PropTypes.number.isRequired,
};

export default DetailCommentItem;

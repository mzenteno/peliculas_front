import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "@hooks/useFetch.jsx";
import DetailCommentItem from "@components/detail/DetailCommentItem.jsx";
import DetailCommentItemForm from "@components/detail/DetailCommentItemForm.jsx";
import { fetchComentariosFindAllByxIdPelicula } from "@services/comentario.jsx";
import { formatFechaHora } from "@services/format.jsx";

const DetailComment = ({ idPelicula }) => {
  const isMounted = useRef(false);
  const { loading, error, fetchData } = useFetch();
  const [comentariosList, setComentariosList] = useState([]);

  useEffect(() => {
    fetchData(() => fetchComentariosFindAllByxIdPelicula(idPelicula))
      .then((data) => {
        setComentariosList(data);
        isMounted.current = true;
      })
      .catch((err) => {
        console.error("Error al cargar comentarios:", err);
      })
      .finally(() => {
        isMounted.current = true;
      });
  }, [fetchData]);

  const agregarComentario = (nuevoComentario) => {
    setComentariosList((prevComentarios) => [nuevoComentario, ...prevComentarios]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <div>{error && <p>Error loading comments: {error.message}</p>}</div>;
  }

  return (
    <div className="comments">
      <DetailCommentItemForm idPelicula={idPelicula} onComentarioCreado={agregarComentario} />
      <ul className="comments__list">
        {comentariosList.map((comentario) => {
          const { fecha, hora } = formatFechaHora(comentario.fecha);

          return (
            <DetailCommentItem
              key={comentario.idComentario}
              idComentario={comentario.idComentario}
              className="comments__item"
              usuario="anónimo"
              fecha={fecha}
              hora={hora}
              descripcion={comentario.descripcion}
              meGusta={comentario.meGusta}
              noMeGusta={comentario.noMeGusta}
            />
          );
        })}
      </ul>
    </div>
  );
};

DetailComment.propTypes = {
  idPelicula: PropTypes.number.isRequired,
};

export default DetailComment;

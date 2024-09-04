import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useFetch from "@hooks/useFetch";
import { fetchComentariosNuevo } from "@services/comentario";

const DetailCommentItemForm = ({ idPelicula, onComentarioCreado }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { fetchData } = useFetch();

  const onSubmit = useCallback(
    (formData) => {
      const comentarioData = {
        ...formData,
        idPelicula,
        idUsuario: 1,
      };

      fetchData(() => fetchComentariosNuevo(comentarioData))
        .then((nuevoComentario) => {
          if (onComentarioCreado) {
            const comentarioFiltrado = {
              idComentario: nuevoComentario.idComentario,
              fecha: nuevoComentario.fecha,
              descripcion: nuevoComentario.descripcion,
              meGusta: nuevoComentario.meGusta,
              noMeGusta: nuevoComentario.noMeGusta,
            };
            onComentarioCreado(comentarioFiltrado);
            reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [fetchData, onComentarioCreado]
  );

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        id="text"
        name="text"
        maxLength={999}
        className="form__textarea"
        placeholder="Agregar comentario..."
        {...register("descripcion", {
          required: {
            value: true,
            message: "Comentario es requerido",
          },
          minLength: {
            value: 10,
            message: "Comentario debe tener al menos 10 caracteres",
          },
          maxLength: {
            value: 999,
            message: "Comentario debe tener máximo 20 caracteres",
          },
        })}
      />
      {errors.descripcion && <span className="error">{errors.descripcion.message}</span>}
      <button type="submit" className="form__btn">
        Enviar
      </button>
    </form>
  );
};
DetailCommentItemForm.propTypes = {
  idPelicula: PropTypes.number.isRequired,
  onComentarioCreado: PropTypes.func.isRequired,
};

export default DetailCommentItemForm;

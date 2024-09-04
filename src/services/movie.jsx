//Obtener pelicula x Id
export const fetchMovieByxId = async (id) => {
  const response = await fetch(`http://127.0.0.1:8080/api/v1/peliculas/${id}`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

//Obtener las peliculas en estreno
export const fetchMovieFindAll = async () => {
  const response = await fetch(`http://127.0.0.1:8080/api/v1/peliculas/estrenos`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

//Obtener los comentarios por IdPelicula
export const fetchComentariosAllByIdPelicula = async (idPelicula) => {
  const response = await fetch(`http://127.0.0.1:8080/api/v1/peliculas/${idPelicula}/comentarios`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

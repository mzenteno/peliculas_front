const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//Obtener pelicula x Id
export const fetchMovieByxId = async (id) => {
  const response = await fetch(`${API_BASE_URL}/peliculas/${id}`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

//Obtener las peliculas en estreno
export const fetchMovieFindAll = async () => {
  const response = await fetch(`${API_BASE_URL}/peliculas/estrenos`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

//Obtener los comentarios por IdPelicula
export const fetchComentariosAllByIdPelicula = async (idPelicula) => {
  const response = await fetch(`${API_BASE_URL}/peliculas/${idPelicula}/comentarios`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

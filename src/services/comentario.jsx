const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//Obtener pelicula x Id
export const fetchComentariosFindAllByxIdPelicula = async (idPelicula) => {
  const response = await fetch(`${API_BASE_URL}/comentarios/peliculas/${idPelicula}`);

  if (!response.ok) {
    throw new Error("error al consumir la api");
  }

  return await response.json();
};

//Nuevo comentario
export const fetchComentariosNuevo = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comentarios/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al crear el comentario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

//Adicionar me gusta
export const fetchComentarioAdicionarMeGusta = async (idComentario) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comentarios/${idComentario}/adicionar-me-gusta`, {
      method: "PUT",
    });

    if (!response.ok) {
      throw new Error("Error al darle me gusta al comentario");
    }

    return await response.json();
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

//Adicionar no me gusta
export const fetchComentarioAdicionarNoMeGusta = async (idComentario) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comentarios/${idComentario}/adicionar-no-me-gusta`, {
      method: "PUT",
    });

    if (!response.ok) {
      throw new Error("Error al darle me gusta al comentario");
    }

    return await response.json();
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

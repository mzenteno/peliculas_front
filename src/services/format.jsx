export const formatFechaHora = (fechaCompleta) => {
  const fecha = new Date(fechaCompleta);

  const opcionesFecha = { year: "numeric", month: "2-digit", day: "2-digit" };
  const opcionesHora = { hour: "2-digit", minute: "2-digit" };

  const fechaFormateada = new Intl.DateTimeFormat("es-ES", opcionesFecha).format(fecha);
  const horaFormateada = new Intl.DateTimeFormat("es-ES", opcionesHora).format(fecha);

  return { fecha: fechaFormateada, hora: horaFormateada };
};

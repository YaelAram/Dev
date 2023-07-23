const obtenerGrupo = async (grupo) => {
  const resp = await fetch(
    `https://www.aragon.unam.mx/horarios/horarios/index_archivos/php/queysA.php?tipo=2&sem=29&carr=12&grupo=${grupo}`
  );
  const data = await resp.json();

  return data;
};

obtenerGrupo(1757).then(console.log).catch(console.error);

export const crearFila = ( { id, first_name, email, avatar } ) => {
    const fila = document.createElement( 'tr' );
    fila.innerHTML = `<td>${ id }</td>
    <td>${ first_name }</td>
    <td>${ email }</td>
    <td><img src="${ avatar }" alt="${ first_name } avatar"></td>`;
    return fila;
};

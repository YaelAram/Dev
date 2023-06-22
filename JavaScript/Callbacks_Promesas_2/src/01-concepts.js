/**
 * 
 * @param { HTMLDivElement } divElement 
 */
export const showENV = ( divElement ) => {
    const { VITE_API_KEY: API_KEY } = import.meta.env;
    divElement.innerHTML = `<p>API_KEY: ${ API_KEY }</p>`;
};

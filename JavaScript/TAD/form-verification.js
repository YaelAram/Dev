const mensajeNombre = 'Utiliza solo letras (mayusculas y minusculas) con una longitud maxima de 30 caracteres',
      mensajeEmail  = 'Verifica el correo ingresado, recuerda el uso del signo @',
      mensajeClave  = 'Recuerda que la clave debe contener al menos 8 caracteres';

const valTexto = ( texto ) => {
    return new Promise( ( resolve, reject ) => {
        if( !texto ) reject( 'variable texto es undefined' );
        else resolve( /^[a-zA-Z ]{1,30}$/g.test( texto ) );
    } );
};

const valEmail = ( email ) => {
    return new Promise( ( resolve, reject ) => {
        if( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{1,63}$/i.test( email ) ) resolve( true );
        else reject( mensajeEmail );
    } );
};

const valClave = ( longitud ) => {
    return new Promise( ( resolve, reject ) => {
        if( !longitud ) reject( 'variable longitud es undefined' );
        else resolve( longitud >= 8 && longitud <= 20  );
    } );
};

const arrPromesa = ( [ nombre, aPaterno, aMaterno, correo, clave ] ) => {
    return [
        valTexto( nombre ),
        valTexto( aPaterno ),
        valTexto( aMaterno ),
        valEmail( correo ),
        valClave( clave )
    ];
};

let campos = [ 'Yael', 'Castillo', 'Sanchez', 'y@g.com', 8 ];
Promise.allSettled( arrPromesa( campos ) )
    .then( values => console.log( values.every( value => value.status === 'fulfilled' ) ) );

export const obtenerUsuarios = async () => {
    try{
        const resp = await fetch( 'https://reqres.in/api/users?page=2' );
        if( !resp.ok ) throw 'La peticion ha fallado';
        const { data } = await resp.json();
        return data;
    }
    catch( error ){
        throw error;
    }
};

export const consultarUsuario = async ( id ) => {
    try{
        const resp = await fetch( `https://reqres.in/api/users/${ id }` );
        if( !resp.ok ) throw 'La peticion ha fallado';
        const { data } = await resp.json();
        return data;
    }
    catch( error ){
        throw error;
    }
};

export const crearUsuario = async ( usuario ) => {
    try{
        const resp = await fetch( `https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify( usuario ),
            headers: { 'Content-Type': 'applicattion/json' }
        } );
        return await resp.json();
    }
    catch( error ){
        throw error;
    }
};

export const actualizarUsuario = async ( id, usuario ) => {
    try{
        const resp = await fetch( `https://reqres.in/api/users/${ id }`, {
            method: 'PUT',
            body: JSON.stringify( usuario ),
            headers: { 'Content-Type': 'applicattion/json' }
        } );
        return await resp.json();
    }
    catch( error ){
        throw error;
    }
};

export const borrarUsuario = async ( id ) => {
    try{
        const resp = await fetch( `https://reqres.in/api/users/${ id }`, { method: 'DELETE' } );
        return ( resp.ok ) ? 'Usuario eliminado' : 'Usuario no eliminado';
    }
    catch( error ){
        throw error;
    }
};

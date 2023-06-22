const baseURL = 'https://api.cloudinary.com/v1_1/dkntz9yz0/upload';

export const uploadIMG = async ( file ) => {
    if( !file ) throw new Error( 'uploadingIMG function file param is required' );

    const formData = new FormData();
    formData.append( 'upload_preset', 'react-journal' );
    formData.append( 'file', file );

    try{
        const resp = await fetch( baseURL, {
            method: 'POST',
            body: formData
        } );

        if( !resp.ok ) throw new Error( 'IMG uploading failed' );
        const cloudinaryInfo = await resp.json();

        return cloudinaryInfo.secure_url;
    }
    catch( error ){
        console.log( error );
        throw new Error( error.message );
    }
};

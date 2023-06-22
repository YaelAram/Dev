export const validatePassword = ( str ) => /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{8,}$/gm.test( str );

export const validateAlpha = ( str ) => /^[a-zA-Z]+$/gm.test( str );

export const validateAlphaNum = ( str ) => /^[a-zA-Z0-9]+$/gm.test( str );

export const validateEmail = ( str ) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test( str );

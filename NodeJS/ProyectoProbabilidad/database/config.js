const mongoose = require( 'mongoose' );

const conectToDataBase = async () => {
    try{
        await mongoose.connect( process.env.MongoDB_Atlas );
        return 'DataBase connection successful';
    }
    catch( error ){
        console.log( error );
        throw new Error( 'DataBase connection error' );
    }
};

module.exports = conectToDataBase;

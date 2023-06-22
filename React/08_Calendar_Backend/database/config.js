import mongoose from 'mongoose';

export const dbConnection = async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect( process.env.DB_CNN );
        console.log( 'Database connected' );
    }
    catch( error ){
        console.log( error );
        throw new Error( 'Error database connection' );
    }
};

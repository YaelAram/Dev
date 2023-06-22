import express, { Application } from "express";
import cors from 'cors';
import userRoutes from '../routes/user_routes';
import connectDB from '../database/connection';

class Server{
    private app: Application;
    private port: string;
    private userRoutes: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? '8080';

        // Routes
        this.userRoutes = '/api/user';
        // DB connection
        this.connectToDB();
        // Middlewares
        this.middlewares();
        // Router
        this.routes();

        this.listen();
    }

    async connectToDB(){
        try{
            await connectDB.authenticate();
            console.log( 'DataBase connected' );
        }
        catch( error: any ){ throw new Error( error ); }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Body read ( get data for any request )
        this.app.use( express.json() );

        // Public Directory
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.userRoutes, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => console.log( `Listening at PORT: ${ this.port}` ) );
    }
}

export default Server;

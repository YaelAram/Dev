import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { dbConnection } from './database/config.js';
import { authRoutes, eventsRoutes } from './routes/index.js';

dotenv.config();

const { PORT } = process.env;
const app = express();

dbConnection();

app.use( cors() );
app.use( express.static( 'public' ) );
app.use( express.json() );

app.use( '/api/auth', authRoutes );
app.use( '/api/events', eventsRoutes );

app.listen( PORT, () => console.log( `Server running at port ${ PORT }` ) );

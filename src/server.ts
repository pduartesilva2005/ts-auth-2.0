import 'reflect-metadata';
import express from 'express';
import 'dotenv/config';

import routes from './routes';
import './database/connection';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server Started at http://localhost:3333');
});
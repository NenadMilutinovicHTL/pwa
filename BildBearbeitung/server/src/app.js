import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import testRoute from './routes/test.js';
import pictureRoutes from './routes/pictureRoutes.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json({ limit: '10mb' }));

app.use('/test', testRoute);
app.use('/picture', pictureRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

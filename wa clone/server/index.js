import express from 'express';
import cors from 'cors';
import Connnection from './database/db.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', route);

Connnection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
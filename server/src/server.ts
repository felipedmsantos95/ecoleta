import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use('/img', express.static(path.resolve(__dirname, '..', 'img')))


app.use(errors());

const port = 3333
app.listen(port);
console.log("Backend running on port " + port)
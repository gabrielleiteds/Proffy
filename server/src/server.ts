import express from 'express';
import cors from 'cors';

import routes from './routes'

const app = express();

app.use(cors({
    origin: 'localhost:8000'
}))
app.use(express.json())
app.use(routes)

app.listen(8000)
import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/products.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/products',productRoutes)


export default app;
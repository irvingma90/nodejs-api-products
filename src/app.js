import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes'
import {createRoles} from './libs/initialsetup';
import bodyParser from 'body-parser'


const app = express();
createRoles();

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('json spaces',1);
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/products',productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


export default app;

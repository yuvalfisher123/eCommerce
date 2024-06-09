import cors from 'cors';
import express, { Request, Response , Application } from 'express';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import productRouter from './routes/productRouter';

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
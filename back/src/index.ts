import cors from 'cors';
import express, { Request, Response , Application } from 'express';
import errorHandler from './middleWare/errorMiddleWare';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import productRouter from './routes/productRouter';
import loginRouter from './routes/loginRouter';
import feedbackRouter from './routes/feedbackRouter';

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/login', loginRouter);
app.use('/feedback', feedbackRouter);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to the api');
});

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
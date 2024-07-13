import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundHandler from './app/middleware/notFoundHandler';
import router from './app/routes';

const app: Application = express();

// Parser
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(cors({ origin: ['http://localhost:5173', 'https://sports-mart.vercel.app'], credentials: true}));

app.use('/api/', router);

app.use('*', notFoundHandler);

app.use(globalErrorHandler);

export default app;

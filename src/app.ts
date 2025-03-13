import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';

// Load environment variables based on stage
const stage = process.env.NODE_ENV || 'dev';
console.log(`Starting application in ${stage} environment`);

// Determine if we're running in AWS Lambda or locally
const isRunningInLambda = !!process.env.AWS_LAMBDA_FUNCTION_NAME;
console.log(`Running in ${isRunningInLambda ? 'AWS Lambda' : 'local'} environment`);

// Only load from .env files when running locally
if (!isRunningInLambda) {
  const envFile = `.env.${stage}`;
  console.log(`Loading environment from ${envFile}`);
  dotenv.config({ path: path.resolve(process.cwd(), envFile) });
} else {
  console.log('Using environment variables from Lambda configuration');
}

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add API version if specified
const apiPrefix = process.env.API_VERSION ? `/api/${process.env.API_VERSION}` : '/api';

// Routes
app.use(apiPrefix, routes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running',
    stage: process.env.NODE_ENV,
    version: process.env.API_VERSION || 'v1',
    environment: isRunningInLambda ? 'lambda' : 'local'
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export { app }; 
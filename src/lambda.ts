import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import serverless from 'serverless-http';
import { app } from './app';

// When running in AWS Lambda, environment variables are set in serverless.yml
// We don't need to load .env files here as they're for local development only
const stage = process.env.NODE_ENV || 'dev';
console.log(`Starting Lambda in ${stage} environment`);

// Create serverless handler
const handler = serverless(app, {
  request: (request: any, event: APIGatewayProxyEvent, context: Context) => {
    // Add stage to request for logging/debugging
    request.stage = stage;
    request.requestId = context.awsRequestId;
    
    // Log request in non-production environments
    if (stage !== 'prod') {
      console.log(`Request ${context.awsRequestId}: ${event.httpMethod} ${event.path}`);
    }
  }
});

// Export the handler function
export { handler }; 
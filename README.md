# Finsbury Backend API

A Node.js Express API with TypeScript support using the AWS Serverless Framework.

## Features

- Express.js with TypeScript
- AWS Serverless Framework integration
- Multiple deployment stages (dev, qa, prod)
- Environment-specific configurations
- API Gateway throttling
- CORS support
- Health check endpoint

## API Endpoints

- **Contact**
  - `POST /api/v1/contact` - Send a contact message
  - `GET /api/v1/contact` - Get all contact messages

- **Donations**
  - `POST /api/v1/donations` - Create a donation
  - `GET /api/v1/donations` - Get all donations

- **Events**
  - `GET /api/v1/events` - Get all events
  - `POST /api/v1/events/register` - Register for an event
  - `GET /api/v1/events/registrations` - Get event registrations

- **Newsletter**
  - `POST /api/v1/newsletter/subscribe` - Subscribe to the newsletter
  - `GET /api/v1/newsletter` - Get all subscribers

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- AWS CLI (for deployment)
- Serverless Framework CLI

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment files:
   ```bash
   cp .env.dev.example .env.dev
   cp .env.qa.example .env.qa
   cp .env.prod.example .env.prod
   ```
4. Update the environment files with your specific configurations

## Running Locally

### Development Stage
```bash
npm run dev
```

### QA Stage
```bash
npm run qa
```

### Production Stage
```bash
npm run prod
```

## Deployment

### Deploy to Development
```bash
npm run deploy:dev
```

### Deploy to QA
```bash
npm run deploy:qa
```

### Deploy to Production
```bash
npm run deploy:prod
```

## Removing Deployments

### Remove Development Deployment
```bash
npm run remove:dev
```

### Remove QA Deployment
```bash
npm run remove:qa
```

### Remove Production Deployment
```bash
npm run remove:prod
```

## Project Structure

```
.
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── app.ts             # Express app setup
│   ├── lambda.ts          # AWS Lambda handler
│   └── local.ts           # Local development server
├── .env.dev               # Development environment variables
├── .env.qa                # QA environment variables
├── .env.prod              # Production environment variables
├── serverless.yml         # Serverless Framework configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## License

ISC 
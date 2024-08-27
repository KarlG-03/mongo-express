import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db';
import { errorHandler } from './errors/errorHandler';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
// import { ApolloServer } from 'apollo-server-express';
// import { typeDefs, resolvers } from './graphql';
// import exampleMiddleware from './middlewares/exampleMiddleware';
// import exampleRoute from './routes/exampleRoute';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// app.use(exampleMiddleware);

// GraphQL setup
// const server = new ApolloServer({ typeDefs, resolvers });
// await server.start();
// server.applyMiddleware({ app, path: '/graphql' });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use(errorHandler);

export default app;

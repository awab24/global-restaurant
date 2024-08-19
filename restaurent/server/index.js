import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routers/routers.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/cyprus-market/build')));

// API routes
app.use('/api', router);

// Fallback route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/cyprus-market/build','index.html'));
});

const connectToMongoose = async () => {
  try {
    await mongoose.connect('mongodb+srv://awab1hassan1ciu:awab1hassan1ciu@cluster0.cwhesro.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB successfully');
    app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

connectToMongoose();




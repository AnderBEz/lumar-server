import dotenv from "dotenv"
import express from 'express';
import emailRoutes from './routes/emailRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
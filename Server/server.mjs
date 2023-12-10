import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import blogRouter from './routes/blogRoute.js';

const port = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use('/api', blogRouter);


app.listen(port, ()=>{
    console.log(`The server is listening at PORT: ${port} 🔥`);
})

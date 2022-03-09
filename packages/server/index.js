import express from 'express';
import yenv from 'yenv';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
const env = yenv('env.yaml', { env: 'development' })

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const startServer = () => {
  mongoose.connect(
    "mongodb+srv://bbwogqoyi:bbw0gq0y1@cluster0.hvym4.mongodb.net/specno",
    { useNewUrlParser: true }
  ).then(() => {
    console.log('MongoDB connected');

    app.listen(env.PORT, () => {
      console.log(`Server listening on port ${env.PORT}`)
    })
  }).catch(err => {
      console.log('Failed to connect to MongoDB', err);
      process.exit(1);
  });
}

startServer()







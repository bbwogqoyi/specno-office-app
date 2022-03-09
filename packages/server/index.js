import express from 'express';
import yenv from 'yenv';
import cors from 'cors';


const app = express()
const env = yenv('env.yaml', { env: 'development' })

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`)
})
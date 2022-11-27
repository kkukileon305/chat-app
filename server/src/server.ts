import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  return res.status(200).json({ message: 'hi' });
});

app.post('/auth/register', async (req, res) => {
  const { username } = req.body;
  if (!username)
    return res.status(400).json({
      message: '이름 없음',
    });

  try {
    await prisma.user.create({
      data: {
        username,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'plz unique name',
    });
  }

  return res.status(200).json({
    message: 'user created',
  });
});

let port = 4000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

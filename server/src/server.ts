import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

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

io.on('connection', async socket => {
  console.log(`${socket.id} 연결됨`);

  socket.on('goooodReq', () => {
    console.log('goooodReq 이벤트 받음');

    socket.emit('goooodRes');
  });
});

let port = 4000;
server.listen(port, () => {
  console.log(`server is running at ${port}`);
});

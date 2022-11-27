'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io({
  autoConnect: false,
  path: 'http://localhost:4000',
});

const LoginPage = () => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <button>goodReq 이벤트 발생</button>
    </div>
  );
};
export default LoginPage;

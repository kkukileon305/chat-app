'use client';

import axios from 'axios';
import { FormEventHandler, useState } from 'react';
import instance from '../../api/instance';

const RegisterPage = () => {
  const [username, setUsername] = useState('');

  const onSubmit: FormEventHandler = async e => {
    e.preventDefault();

    try {
      const res = await instance.post('/auth/register', { username });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-32px)]'>
      <form className='w-full max-w-[300px] px-2 border rounded-xl p-4' onSubmit={onSubmit}>
        <h2 className='font-bold text-blue-600'>Username</h2>
        <input onChange={({ target: { value } }) => setUsername(value)} value={username} className='focus:outline-none' type='text' placeholder='username' />
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;

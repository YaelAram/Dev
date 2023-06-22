import { useState } from 'react';

interface Person {
  uid: string;
  name: string;
};

export function User() {
  const [user, setUser] = useState<Person>();

  const logIn = () => {
    setUser({
      uid: 'ABC123',
      name: 'Yael'
    });
  };

  return (
    <>
      <h3>User</h3>
      <button type='button' className='btn btn-outline-primary' onClick={logIn}>
        Login
      </button>
      <pre className='mt-2'>
        {(user) ? JSON.stringify(user) : 'Sin usuario'}
      </pre>
    </>
  );
};

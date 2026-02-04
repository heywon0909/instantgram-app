'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn('google')
      .then(res => {
        console.log('signIn response', res);
        return res;
      })
      .catch(err => {
        console.error('signIn error', err);
      });
  };
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <button className="p-2 border rounded-md" onClick={handleLogin}>
        Sign in with Google
      </button>
    </section>
  );
}

import { Suspense } from 'react';
import { Metadata } from 'next';
import SignUpClient from './components/SignUpClient';

export const metadata: Metadata = {
  title: 'Sign Up | EduPons',
  description: 'Create your EduPons account.',
};

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpClient />
    </Suspense>
  );
}

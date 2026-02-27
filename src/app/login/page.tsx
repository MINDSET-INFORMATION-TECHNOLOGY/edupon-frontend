import { Metadata } from 'next';
import LoginClient from './components/LoginClient';

export const metadata: Metadata = {
  title: 'Login | EduPons',
  description: 'Login to your EduPons account.',
};

export default function LoginPage() {
  return <LoginClient />;
}

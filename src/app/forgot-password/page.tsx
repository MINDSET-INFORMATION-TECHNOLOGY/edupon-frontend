import { Metadata } from 'next';
import ForgotPasswordClient from './components/ForgotPasswordClient';

export const metadata: Metadata = {
  title: 'Forgot Password | EduPons',
  description: 'Reset your EduPons password in a few steps.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}

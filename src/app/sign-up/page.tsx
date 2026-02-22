import { Metadata } from 'next';
import SignUpClient from './components/SignUpClient';

export const metadata: Metadata = {
  title: 'Sign Up | EduPons',
  description: 'Create your EduPons account.',
};

export default function SignUpPage() {
  return <SignUpClient />;
}

// app/
//   sign-up/
//     page.tsx
//     components/
//       AuthLayout.tsx
//       SignUpClient.tsx
//       StepOne.tsx
//       StepTwo.tsx
//       StepThree.tsx
//       StepFour.tsx
//       StepFive.tsx

'use client';

import { useState } from 'react';
import AuthLayout from '@/app/sign-up/components/AuthLayout';
import LoginStepOne from '@/app/login/components/LoginStepOne';
import LoginStepTwo from '@/app/login/components/LoginStepTwo';

export default function LoginClient() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <AuthLayout
      imageSrc="/sign-up2.png"
      step={step}
      totalSteps={2}
      imagePosition="left"
      type="login"
    >
      {step === 1 && <LoginStepOne nextStep={nextStep} />}
      {step === 2 && <LoginStepTwo />}
    </AuthLayout>
  );
}

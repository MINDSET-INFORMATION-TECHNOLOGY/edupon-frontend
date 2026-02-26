'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from './AuthLayout';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';

export default function SignUpClient() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const getImage = () => {
    if (step === 1) return '/sign-up1.png';
    return '/sign-up2.png';
  };

  const handleVerificationSuccess = () => {
    setStep(6);

    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };

  return (
    <AuthLayout imageSrc={getImage()} step={step}>
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <StepFour nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <StepFive nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <StepSix />}
    </AuthLayout>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from './AuthLayout';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

export default function SignUpClient() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  // Move to next step
  const nextStep = () => setStep((prev) => prev + 1);

  // Move to previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Change image based on step
  const getImage = () => {
    if (step === 1) return '/sign-up1.png';
    return '/sign-up2.png';
  };

  // Handle verification success (step 4)
  const handleVerificationSuccess = () => {
    setStep(5);

    // Redirect after 2 seconds
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };

  return (
    <AuthLayout imageSrc={getImage()} step={step}>
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <StepFour prevStep={prevStep} onSuccess={handleVerificationSuccess} />}
      {step === 5 && <StepFive />}
    </AuthLayout>
  );
}

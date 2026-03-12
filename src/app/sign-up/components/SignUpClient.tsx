'use client';

import { useState } from 'react';
import AuthLayout from './AuthLayout';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';

export default function SignUpClient() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const getImageSrc = () => {
    if (step === 1) return '/sign-up1.png';
    return '/sign-up2.png';
  };

  return (
    <AuthLayout
      imageSrc={getImageSrc()}
      step={step}
      totalSteps={6}
      imagePosition="right"
      showProgress={true}
      type="signup"
    >
      {step === 1 && <StepOne nextStep={nextStep} setRole={setRole} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} role={role} />}
      {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} role={role} />}
      {step === 4 && <StepFour nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <StepFive nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <StepSix />}
    </AuthLayout>
  );
}

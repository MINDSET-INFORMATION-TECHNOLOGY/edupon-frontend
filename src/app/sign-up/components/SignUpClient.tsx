'use client';

import AuthLayout from './AuthLayout';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function SignUpClient() {
  const currentStep = useAppSelector((state) => state.auth.currentStep);

  const getImageSrc = () => {
    if (currentStep === 1) return '/sign-up1.png';
    return '/sign-up2.png';
  };

  return (
    <AuthLayout
      imageSrc={getImageSrc()}
      step={currentStep}
      totalSteps={6}
      imagePosition="right"
      showProgress={true}
      type="signup"
    >
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
      {currentStep === 5 && <StepFive />}
      {currentStep === 6 && <StepSix />}
    </AuthLayout>
  );
}

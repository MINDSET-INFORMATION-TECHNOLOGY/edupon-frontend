'use client';

import { useState } from 'react';
import ForgotPasswordStep1 from './ForgotPasswordStep1';
import ForgotPasswordStep2 from './ForgotPasswordStep2';
import ForgotPasswordStep3 from './ForgotPasswordStep3';
import ForgotPasswordStep4 from './ForgotPasswordStep4';

export default function ForgotPasswordClient() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(''); // Store OTP after verification

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 1 && <ForgotPasswordStep1 nextStep={nextStep} setEmail={setEmail} />}
      {step === 2 && (
        <ForgotPasswordStep2
          nextStep={nextStep}
          prevStep={prevStep}
          email={email}
          setOtp={setOtp}
        />
      )}
      {step === 3 && (
        <ForgotPasswordStep3 nextStep={nextStep} prevStep={prevStep} email={email} otp={otp} />
      )}
      {step === 4 && <ForgotPasswordStep4 />}
    </>
  );
}

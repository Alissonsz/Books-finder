import React, { useState } from 'react';
import EmailStep from './components/EmailStep';
import PasswordStep from './components/PasswordStep';
import {
  Container
} from './styles';

const LoginForm = () => {
  const loginSteps = [< EmailStep />, <PasswordStep />];
  const [step, setStep] = useState(0);
  function handleNextStep() {
    setStep(prevStep => prevStep + 1);
  }
  
  return(
    <Container>
      {loginSteps[step]}
      <button onClick={handleNextStep}>Next step</button>
    </Container>
  );
}

export default LoginForm;
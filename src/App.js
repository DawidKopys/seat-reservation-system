import React, { useState } from 'react';
import './App.css';

import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  switch (step) {
    case 1:
      return <Page1 nextStep={nextStep} />;

    case 2:
      return <Page2 nextStep={nextStep} />;

    case 3:
      return <Page3 />;

    default:
      return <h1>Not implemented step: {step}</h1>;
  }
}

export default App;

import React, { useState } from 'react';
import { InstallmentsTable, LoanForm } from "../components";
import mockCalculateInstallments from '../services/Mock';
import '../styles/HomePage.css';

const HomePage = () => {
  const [installments, setInstallments] = useState([]);

  const handleCalculate = (loanData) => {
    const calculatedInstallments = mockCalculateInstallments(loanData);
    setInstallments(calculatedInstallments);
  };

  return (
    <div id='page'>
      <div id='header'>
        <h2 id='title'>Simulador de Financiamento de Capital de Giro</h2>
      </div>
      <div id='body'>
        <LoanForm onCalculate={handleCalculate} />
        {installments.length > 0 && <InstallmentsTable installments={installments} />}
      </div>
    </div>
  );
};

export default HomePage;

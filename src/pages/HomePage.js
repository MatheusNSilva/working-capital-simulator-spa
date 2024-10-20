import React, { useState, useEffect } from 'react';
import { InstallmentsTable, LoanForm } from "../components";
import { calculateInstallments } from '../services/WorkingCapitalSimulatorApi';
import '../styles/HomePage.css';

const HomePage = () => {
  const [installments, setInstallments] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (installments.length > 0) {
      setShowTable(true);
    }
  }, [installments]);

  const handleCalculate = async (loanData) => {
    const installmentsData = await calculateInstallments(loanData);
    const calculatedInstallments = Object.entries(installmentsData.calculatedInstallments);
    setInstallments(calculatedInstallments);
  };

  const RenderTable = (isOpen) => (
    isOpen.isOpen && <InstallmentsTable installments={installments} />
  );

  return (
    <div id='page'>
      <div id='header'>
        <h2 id='title'>Simulador de Financiamento de Capital de Giro</h2>
      </div>
      <div id='body'>
        <LoanForm onCalculate={handleCalculate} />
        <RenderTable isOpen={showTable} />
      </div>
    </div>
  );
};

export default HomePage;

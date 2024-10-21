import React, { useState, useEffect, useRef } from "react";
import { InstallmentsTable, LoanForm } from "../components";
import { calculateInstallments } from "../services/WorkingCapitalSimulatorApi";
import "../styles/HomePage.css";

const HomePage = () => {
  const [installments, setInstallments] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    if (installments.length > 0) {
      setShowTable(true);
    }
  }, [installments]);

  useEffect(() => {
    if (showTable && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showTable]);

  const handleCalculate = async (loanData) => {
    const installmentsData = await calculateInstallments(loanData);
    const calculatedInstallments = Object.entries(
      installmentsData.calculatedInstallments
    );
    setInstallments(calculatedInstallments);
  };

  const RenderTable = (isOpen) =>
    isOpen.isOpen && <InstallmentsTable installments={installments} />;

  return (
    <div id="page">
      <div id="header">
        <h2 id="title">Simulador de Financiamento de Capital de Giro</h2>
      </div>
      <div id="body">
        <LoanForm onCalculate={handleCalculate} />
        <div ref={tableRef}>
          <RenderTable isOpen={showTable} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

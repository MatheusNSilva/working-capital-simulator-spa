// Função mock para simular a resposta do backend
const mockCalculateInstallments = (loanData) => {
    // Aqui você pode criar uma lógica simples para simular as parcelas
    const { loanAmount, interestRate, installments } = loanData;
  
    const installmentsTotal = [];
    for (let i = 1; i <= installments; i++) {
      // Exemplo simples de cálculo fictício para as parcelas
      const paymentDate = new Date();
      paymentDate.setMonth(paymentDate.getMonth() + i);
  
      installmentsTotal.push({
        installmentNumber: i,
        amount: (loanAmount / installments) * (1 + interestRate / 100),
        paymentDate: paymentDate.toLocaleDateString(),
      });
    }
  
    return installmentsTotal;
  };

  export default mockCalculateInstallments;
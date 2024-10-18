// Função mock para simular a resposta do backend
const mockCalculateInstallments = (loanData) => {
    // Aqui você pode criar uma lógica simples para simular as parcelas
    const { loanAmount, interestRate, numberOfInstallments } = loanData;
  
    const installments = [];
    for (let i = 1; i <= numberOfInstallments; i++) {
      // Exemplo simples de cálculo fictício para as parcelas
      const paymentDate = new Date();
      paymentDate.setMonth(paymentDate.getMonth() + i);
  
      installments.push({
        installmentNumber: i,
        amount: (loanAmount / numberOfInstallments) * (1 + interestRate / 100),
        paymentDate: paymentDate.toLocaleDateString(),
      });
    }
  
    return installments;
  };

  export default mockCalculateInstallments;
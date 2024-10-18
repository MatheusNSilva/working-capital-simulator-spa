import React from 'react';

const InstallmentsTable = ({installments}) => {
    return (
        <table>
          <thead>
            <tr>
              <th>Parcela</th>
              <th>Data de Pagamento</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {installments.map((installment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{installment.paymentDate}</td>
                <td>{installment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
};

export default InstallmentsTable;
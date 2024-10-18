import React, { useState } from "react";
import { 
  Button, 
  FormControl, 
  FormLabel, 
  MenuItem, 
  Select, 
  TextField 
} from "@mui/material";
import '../styles/LoanForm.css';

const LoanForm = ({ onCalculate }) => {
  const [loanType, setLoanType] = useState("");
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    installments: "",
    concessionDate: "",
    calculationOption: "",
    correctionRate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    setLoanType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onCalculate(formData);
    // try {
    //   const response = await axios.post('/api/calculate', formData);
    //   onCalculate(response.data); // Envia o resultado para o componente pai (HomePage)
    // } catch (error) {
    //   console.error('Erro ao calcular as parcelas:', error);
    // }
  };

  return (
    <FormControl id='form' onSubmit={handleSubmit}>
      <FormLabel>Valor do Empréstimo</FormLabel>
      <TextField
        variant="outlined"
        type="number"
        onChange={handleChange}
        required
      />
      <FormLabel>Taxa de Juros</FormLabel>
      <TextField
        variant="outlined"
        type="number"
        onChange={handleChange}
        required
      />
      <FormLabel>Número de Parcelas</FormLabel>
      <TextField
        variant="outlined"
        type="number"
        onChange={handleChange}
        required
      />
      <FormLabel>Mês e Ano de Concessão</FormLabel>
      <TextField
        variant="outlined"
        type="month"
        onChange={handleChange}
        required
      />
      <FormLabel>Opção de Calculo</FormLabel>
      <Select
        value={loanType}
        onChange={(e) => {
          handleChange(e);
          handleSelectChange(e);
        }}
        required
      >
        <MenuItem value="a">Pré-fixado com juros sobre saldo devedor</MenuItem>
        <MenuItem value="b">Pré-fixado com juros na parcela</MenuItem>
        <MenuItem value="c">Pós-fixado com juros e correção no saldo devedor</MenuItem>
        <MenuItem value="d">Pós-fixado com juros e correção na parcela</MenuItem>
        <MenuItem value="e">Pós-fixado com juros sobre saldo devedor e correção na parcela</MenuItem>
      </Select>
      <FormLabel>Taxa de Correção Monetária</FormLabel>
      <TextField
        variant="outlined"
        type="number"
        onChange={handleChange}
        disabled={["a", "b"].includes(loanType)}
        required
      />
      <Button 
        type="submit"
        variant="contained" 
        id='button'
      >Calcular Parcelas</Button>
    </FormControl>
  );
};

export default LoanForm;

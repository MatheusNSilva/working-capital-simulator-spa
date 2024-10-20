import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "../styles/LoanForm.css";
import {
  useFontStyles,
  useButtonStyles,
} from "../styles/MUIComponentsStyles.js";

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

  const fontClasses = useFontStyles();
  const buttonClasses = useButtonStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setLoanType(value);
    setFormData({ ...formData, calculationOption: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="form">
        <FormLabel className={fontClasses.root}>Valor do Empréstimo</FormLabel>
        <TextField
          variant="outlined"
          className={fontClasses.root}
          name="loanAmount"
          type="number"
          onChange={handleChange}
          required
        />
        <FormLabel className={fontClasses.root}>Taxa de Juros</FormLabel>
        <TextField
          variant="outlined"
          className={fontClasses.root}
          name="interestRate"
          type="number"
          onChange={handleChange}
          required
        />
        <FormLabel className={fontClasses.root}>Número de Parcelas</FormLabel>
        <TextField
          variant="outlined"
          className={fontClasses.root}
          name="installments"
          type="number"
          onChange={handleChange}
          required
        />
        <FormLabel className={fontClasses.root}>
          Mês e Ano de Concessão
        </FormLabel>
        <TextField
          variant="outlined"
          className={fontClasses.root}
          name="concessionDate"
          type="month"
          onChange={handleChange}
          required
        />
        <FormLabel className={fontClasses.root}>Opção de Calculo</FormLabel>
        <Select value={loanType} onChange={handleSelectChange} required>
          <MenuItem value="preFixedInterestOB">
            Pré-fixado com juros sobre saldo devedor
          </MenuItem>
          <MenuItem value="preFixedInterestInstallments">
            Pré-fixado com juros na parcela
          </MenuItem>
          <MenuItem value="postFixedInterestCorrectionOB">
            Pós-fixado com juros e correção no saldo devedor
          </MenuItem>
          <MenuItem value="postFixedInterestCorrectionInstallments">
            Pós-fixado com juros e correção na parcela
          </MenuItem>
          <MenuItem value="postFixedInterestOBCorrectionInstallments">
            Pós-fixado com juros sobre saldo devedor e correção na parcela
          </MenuItem>
        </Select>
        {["postFixedInterestCorrectionOB", "postFixedInterestCorrectionInstallments", "postFixedInterestOBCorrectionInstallments"].includes(
          loanType
        ) && (
          <>
            <FormLabel className={fontClasses.root}>
              Taxa de Correção Monetária
            </FormLabel>
            <TextField
              variant="outlined"
              className={fontClasses.root}
              name="correctionRate"
              type="number"
              onChange={handleChange}
              required
            />
          </>
        )}
        <Button
          className={buttonClasses.root}
          type="submit"
          variant="contained"
          id="button"
        >
          Simular
        </Button>
      </FormControl>
    </form>
  );
};

export default LoanForm;

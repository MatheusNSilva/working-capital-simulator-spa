import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../styles/InstallmentsTable.css";
import { useFontStyles } from "../styles/MUIComponentsStyles.js";

const InstallmentsTable = ({ installments }) => {
  const classes = useFontStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Voltar para a primeira página
  };

  const installmentsNormalized = installments.map(installment => installment[1]);

  const paginatedInstallments = installmentsNormalized.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer id="container" component={Paper}>
      <Table id="table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.root}>Parcela</TableCell>
            <TableCell className={classes.root}>Data de Pagamento</TableCell>
            <TableCell className={classes.root}>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedInstallments.map((installment, index) => (
            <TableRow key={index}>
              <TableCell className={classes.root}>{installment.installment}</TableCell>
              <TableCell className={classes.root}>
                {installment.paymentDate}
              </TableCell>
              <TableCell className={classes.root}>
                {installment.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          component="div"
          count={installments.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]} 
        />
      </Table>
    </TableContainer>
  );
};

export default InstallmentsTable;

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../common.scss'

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(col1, col2, col3, col4) {
  return { col1, col2, col3, col4};
}

const rows = [
    createData('Market Cap', `Allocation according to the size of the company's value of a security`,
              `Allocates more capital to largest securities by market value to represent the market`, 
              `Concentration to largest stocks`),
    createData('Equal Weighting', 'Allocate equally across securities', 
              `Increase weight diversification compared to the market valueweighted index`
              , 'A bias to small and midsized securities and Higher turnover '),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">Weighting Scheme</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Pros</StyledTableCell>
            <StyledTableCell align="center">Cons</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.col1}</StyledTableCell>
              <StyledTableCell align="center">{row.col2}</StyledTableCell>
              <StyledTableCell align="center">{row.col3}</StyledTableCell>
              <StyledTableCell align="center">{row.col4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
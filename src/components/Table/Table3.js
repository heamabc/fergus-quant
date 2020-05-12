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
    align: 'center'
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(idx, col1, col2, col3) {
  return {idx, col1, col2, col3 };
}

const rows = [
    createData(1, 'Mean', 0, 0),
    createData(2, '---', 'Variance', 1),
    createData(3, '---', '---', 'Skewness'),
    createData(4, '---', '---', 'Kurtosis')
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
            <StyledTableCell align="center">Moment Ordinal</StyledTableCell>
            <StyledTableCell align="center">Raw Moment</StyledTableCell>
            <StyledTableCell align="center">Central Moment</StyledTableCell>
            <StyledTableCell align="center">Standardized Moment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.idx}</StyledTableCell>
              <StyledTableCell align="center">{row.col1}</StyledTableCell>
              <StyledTableCell align="center">{row.col2}</StyledTableCell>
              <StyledTableCell align="center">{row.col3}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
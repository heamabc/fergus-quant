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

function createData(col1, col2) {
  return { col1, col2 };
}

const rows = [
    createData('Used as a unique identifier of the row', 'Provide a link between two tables'),
    createData('It is a primary key', 'Refers to a primary key of another table'),
    createData('Only one primary key is allowed in a table', 'More than one foreign key are allowed in a table'),
    createData('It is unique and cannot contain NULL', 'can have duplicate values and NULL'),
    createData('Cannot be delete', 'Can be deleted in the child table'),
    createData('Can specify its constraints', 'Cannot specify its constraints in the child table')
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
            <StyledTableCell align="center">Primary Key</StyledTableCell>
            <StyledTableCell align="center">Foreign Key</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.col1}</StyledTableCell>
              <StyledTableCell align="left">{row.col2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
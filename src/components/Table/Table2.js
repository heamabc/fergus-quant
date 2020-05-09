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

function createData(idx, col1, col2) {
  return {idx, col1, col2 };
}

const rows = [
    createData(0, 'No permission', '---'),
    createData(1, 'Execute permission', '--x'),
    createData(2, 'Write permission', '-w-'),
    createData(3, 'Execute and write permission ( 1 + 2 = 3)', '-wx'),
    createData(4, 'Read permission', 'r--'),
    createData(5, 'Read and execute permission ( 4 + 1 = 5)', 'r-x'),
    createData(6, 'Read and write permission ( 4 + 2 = 6)', 'rw-'),
    createData(7, 'Read, write, and execute permission ( 4 + 2 + 1 = 7)', 'rwx')
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
            <StyledTableCell align="center">Number</StyledTableCell>
            <StyledTableCell align="center">Octal Mode Representation</StyledTableCell>
            <StyledTableCell align="center">rwx</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.idx}</StyledTableCell>
              <StyledTableCell align="left">{row.col1}</StyledTableCell>
              <StyledTableCell align="center">{row.col2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const DataTable = ({ classes, list }) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Rank</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Price Change (24h)</TableCell>
            <TableCell numeric>Market Cap</TableCell>
            <TableCell numeric>Volume (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell numeric>{row.rank}</TableCell>
                <TableCell numeric>{row.name}</TableCell>
                <TableCell numeric>{row.quotes.USD.price}</TableCell>
                <TableCell numeric>{row.quotes.USD.percent_change_24h}%</TableCell>
                <TableCell numeric>{row.quotes.USD.market_cap}</TableCell>
                <TableCell numeric>{row.quotes.USD.volume_24h}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);

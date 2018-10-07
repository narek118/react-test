import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';

import routes from '../routes';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  mainApp: {
    textAlign: 'center',
  },
};

const LayoutContainer = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
            Test Task
        </Typography>
        <Link className={classes.link} to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link className={classes.link} to="/liquidity">
          <Button color="inherit">Liquidity</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <div className={classes.mainApp}>
      {routes}
    </div>
  </div>
);

LayoutContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutContainer);

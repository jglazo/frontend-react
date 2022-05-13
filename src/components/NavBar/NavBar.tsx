import React, { FunctionComponent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// styles
import { navBarStyles } from './NavBar.styles';
// static
import logo from '../../static/full-logo.png';

const NavBar: FunctionComponent = () => {
  const classes = navBarStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Link to="/">
        <img src={logo} alt="brand-navbar" className="brand" />
      </Link>
      <Button variant="contained" size="small" onClick={() => navigate('/')}>
        Log In
      </Button>
    </div>
  );
};

export default NavBar;

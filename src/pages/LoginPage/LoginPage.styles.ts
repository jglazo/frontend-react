import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
// sources
import loginBg from '../../static/login-bg-label.png';

export const loginPageStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    background: '#f4f4f4',
    boxSizing: 'border-box',
  },
  sideLeft: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    position: 'relative',
    background: `url(${loginBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 0,
    },
    '& .label': {
      fontSize: '20px',
      fontWeight: 500,
      position: 'absolute',
      top: '50%',
      left: '100px',
      color: '#FFFFFF',
    },
  },
  sideRight: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    background: '#FFFFFF',
    '& .logo': {
      width: '150px',
      height: '60px',
    },
    '& .title': {
      fontSize: '27px',
      fontWeight: '700',
      margin: '1em 0 0 0',
    },
    '& .subtitle': {
      color: '#2D3748',
      margin: '0.5em 0 1em 0',
    },
  },
  formInputRoot: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& label': {
      display: 'flex',
      marginBottom: theme.spacing(1),
    },
  },
  forgotLabel: {
    display: 'flex',
    width: '100%',
    justifyContent: 'end',
    '& p': {
      color: theme.palette.text.secondary,
      fontWeight: 600,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  link: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    cursor: 'pointer',
    margin: '0 3px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

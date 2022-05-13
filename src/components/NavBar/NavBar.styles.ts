import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
// sources
// import loginBg from '../../static/login-bg-label.png';

export const navBarStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    padding: '1em 4em',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& img': {
      width: '105px',
      height: '40px',
    },
  },
}));

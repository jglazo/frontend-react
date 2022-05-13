import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const formPageStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    padding: '5em 2em 2em !important',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
      textAlign: 'center',
    },
    '& .subtitle': {
      maxWidth: '400px',
      textAlign: 'center',
    },
  },
  form: {
    width: '100%',
    margin: '1em 0 0',
    '& label': {
      display: 'flex',
      color: '#000000',
      fontWeight: 500,
      margin: '0 0 10px 0',
    },
    '& .MuiButton-root': {
      margin: '2.5em 0 2em 0',
    },
  },
  title: {
    '&.MuiTypography-root': {
      fontWeight: 600,
    },
  },
  switchText: {
    '&.MuiTypography-root': {
      fontWeight: 600,
      color: '#6F6C90',
    },
  },
  callingSubscription: {
    display: 'flex',
    alignItems: 'center',
    color: '#6F6C90',
    fontWeight: 500,
    margin: '2em 0 1em 0',
    '& span': {
      marginLeft: '4px',
    },
  },
  boxSubscriptions: {
    marginTop: _theme.spacing(2),
    marginBottom: _theme.spacing(2),
    '& p': {
      color: '#6F6C90',
      fontWeight: 500,
      fontSize: '14px',
      '& span': {
        color: '#000000',
      },
    },
  },
  buttonSignUp: {
    margin: '2.5em 0 4em 0',
    '& .MuiButton-root': {
      margin: 0,
    },
    '& .orDivider': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 500,
      color: '#2D3748',
      margin: '1em 0',
      '&:after, &:before': {
        content: `''`,
        border: '1px solid rgba(226, 226, 226, 1)',
        flex: 1,
      },
      '&:not(:empty)::before': {
        marginRight: '1em',
      },
      '&:not(:empty)::after': {
        marginLeft: '1em',
      },
    },
  },
}));

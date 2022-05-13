import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles/';

export const rootStyles = makeStyles((_theme: Theme) => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  flexColumnCenter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumnCenterX: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexColumnCenterY: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none',
  },
}));

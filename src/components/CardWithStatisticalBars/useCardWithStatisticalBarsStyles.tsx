import { makeStyles } from '@mui/styles';

export const useCardWithStatisticalBarsStyles = makeStyles({
  cardContetStyles: {
    width: '100%',
    height: 'auto',
    padding: '2rem !important',
    boxSizing: 'border-box',
  },
  titleStyles: {
    '&.MuiTypography-root': {
      color: '#130F26',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.174rem',
      marginBottom: '0.2rem',
    },
  },
  subtitleStyles: {
    '&.MuiTypography-root': {
      color: '#6F6C90',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
      fontWeight: 400,
    },
  },
  amountStyles: {
    '&.MuiTypography-root': {
      color: '#130F26',
      fontWeight: 600,
      fontSize: '3rem',
    },
  },
  infoIconStyles: {
    '&.MuiSvgIcon-root': {
      alignSelf: 'flex-end',
      color: '#6F6C90',
    },
  },
  typeOfAmountStyles: {
    '&.MuiTypography-root': {
      alignSelf: 'flex-end',
    },
  },
});

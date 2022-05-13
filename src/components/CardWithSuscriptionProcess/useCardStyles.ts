import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

interface StyleProps {
  progressCompleted: boolean;
}

export const useCardStyles = makeStyles<Theme, StyleProps>((theme) => ({
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
      fontSize: '1rem',
      lineHeight: '1.174rem',
      marginBottom: '1rem',
    },
  },
  firstStepTextStyles: {
    '&.MuiTypography-root': {
      color: theme.palette.primary.main,
      fontSize: '0.875rem',
    },
  },
  secondStepTextStyles: {
    '&.MuiTypography-root': {
      color: ({ progressCompleted }) =>
        progressCompleted ? theme.palette.primary.main : '#130F26',
      fontSize: '0.875rem',
    },
  },
}));

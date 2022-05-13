import { makeStyles } from '@mui/styles';
import imgBackground from '../../static/fundraising-dataroom-background.png';

export const useFundraisingDataroomCardStyles = makeStyles({
  cardContetStyles: {
    '&.MuiPaper-root': {
      backgroundImage: `url(${imgBackground})`,
      backgroundSize: 'cover',
      width: '19rem',
      height: '6.4rem',
      padding: '1.2rem',
      backgroundPosition: 'bottom',
      borderRadius: '10px',
    },
  },
  textStyles: {
    '&.MuiTypography-root': {
      color: '#FFFFFF',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.321rem',
    },
  },
  buttonStyles: {
    '&.MuiButton-root': {
      height: '2rem',
      width: '0.4rem',
      padding: 0,
      margin: 0,
      backgroundColor: '#342D48',
      '&:hover': {
        backgroundColor: '#342D48',
      },
    },
  },
});

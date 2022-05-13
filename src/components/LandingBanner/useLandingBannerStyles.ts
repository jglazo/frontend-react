import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import bannerBackground from '../../static/landing-banner-background.png';

interface StyleProps {
  width: string;
}

export const useLandingBannerStyles = makeStyles<Theme, StyleProps>(
  (theme) => ({
    paperStyles: {
      '&.MuiPaper-root': {
        width: ({ width }) => width,
        minWidth: '30rem',
        height: '13rem',
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        padding: '2rem',
        borderRadius: '12px',
        '& .landing-banner': {
          position: 'relative',
          zIndex: 99,
          left: '65%',
          bottom: '130%',
          width: '10.749rem',
        },
      },
    },
    textStyles: {
      '&.MuiTypography-root': {
        color: '#FFFFFF',
        fontSize: '1.6rem',
        maxWidth: '10rem',
        fontWeight: 400,
        lineHeight: '2.348rem',
      },
    },
    buttonStyles: {
      '&.MuiButton-root': {
        maxWidth: '9rem',
        padding: '0.6rem 1.7rem',
        backgroundColor: '#FFFFFF',
        color: theme.palette.primary.main,
        marginTop: '1.2rem',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  })
);

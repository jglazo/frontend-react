import React from 'react';
import { Button, Paper, Typography, Box } from '@mui/material';
import banner from '../../static/landing-banner.png';
import { useLandingBannerStyles } from './useLandingBannerStyles';

interface Props {
  width: string;
}
const LandingBanner = ({ width }: Props) => {
  const { paperStyles, textStyles, buttonStyles } = useLandingBannerStyles({
    width,
  });

  return (
    <Paper classes={{ root: paperStyles }}>
      <Box>
        <Typography classes={{ root: textStyles }}>
          {`We've got your back`}
        </Typography>
        <Button variant="contained" classes={{ root: buttonStyles }}>
          See more
        </Button>
      </Box>
      <img src={banner} alt="banner" className="landing-banner" />
    </Paper>
  );
};

export default LandingBanner;

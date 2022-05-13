import React from 'react';
import { Paper, Box, Typography, Grid, Button } from '@mui/material';
import { ReactComponent as EditIcon } from '../../static/edit-icon.svg';
import { useFundraisingDataroomCardStyles } from './useFundraisingDataroomCardStyles';

const FundraisingDataroomCard = () => {
  const {
    cardContetStyles,
    textStyles,
    buttonStyles,
  } = useFundraisingDataroomCardStyles();

  return (
    <Paper classes={{ root: cardContetStyles }}>
      <Grid container direction="row">
        <Grid item xs={2}>
          <Typography classes={{ root: textStyles }}>
            Fundraising Dataroom
          </Typography>
        </Grid>
        <Grid item xs>
          <Box
            display="flex"
            justifyContent="flex-end"
            flexDirection="column"
            alignItems="flex-end"
          >
            <Box sx={{ cursor: 'pointer' }}>
              <EditIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end">
        <Button variant="contained" classes={{ root: buttonStyles }}>
          View
        </Button>
      </Grid>
    </Paper>
  );
};

export default FundraisingDataroomCard;

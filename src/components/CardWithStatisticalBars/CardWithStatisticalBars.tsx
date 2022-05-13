import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ReactComponent as DecreaseBarIcon } from '../../static/decrease-bars-icon.svg';
import { ReactComponent as IncreaseBarIcon } from '../../static/increase-bars-icon.svg';
import { useCardWithStatisticalBarsStyles } from './useCardWithStatisticalBarsStyles';

interface Props {
  title: string;
  subtitle: string;
  amount: number | string;
  typeOfAmount: string;
  typeOfIcon: 'decrease' | 'increase';
  handleClickInfoIcon: () => void;
}

const CardWithStatisticalBars = ({
  title,
  subtitle,
  amount,
  typeOfAmount,
  typeOfIcon,
  handleClickInfoIcon,
}: Props) => {
  const {
    titleStyles,
    cardContetStyles,
    subtitleStyles,
    amountStyles,
    infoIconStyles,
    typeOfAmountStyles,
  } = useCardWithStatisticalBarsStyles();

  return (
    <Card>
      <CardContent classes={{ root: cardContetStyles }}>
        <Grid container direction="row">
          <Grid item xs={8}>
            <Typography classes={{ root: titleStyles }}>{title}</Typography>
            <Typography classes={{ root: subtitleStyles }}>
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ cursor: 'pointer' }}
            >
              <InfoOutlinedIcon
                onClick={handleClickInfoIcon}
                classes={{ root: infoIconStyles }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={7}>
            <Box display="flex" flexWrap="wrap">
              <Typography classes={{ root: amountStyles }}>{amount}</Typography>
              <Typography mb={2} ml={1} classes={{ root: typeOfAmountStyles }}>
                {typeOfAmount}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignContent="flex-end"
            >
              {typeOfIcon === 'increase' ? (
                <IncreaseBarIcon />
              ) : (
                <DecreaseBarIcon />
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardWithStatisticalBars;

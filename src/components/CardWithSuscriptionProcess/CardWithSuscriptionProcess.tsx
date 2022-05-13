import React, { ReactElement } from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { ReactComponent as ProgressIconComplete } from '../../static/progress-vertical-complete.svg';
import { ReactComponent as ProgressIconIncomplete } from '../../static/progress-vertical-incomplete.svg';
import { ReactComponent as DocumentIcon } from '../../static/document-icon.svg';
import { useCardStyles } from './useCardStyles';

interface Props {
  title: string;
  firstStepText: string;
  secondStepText: string;
  progressCompleted: boolean;
  children: ReactElement;
  handleClickInformationToQuote: () => void;
}

const CardWithSuscriptionProcess = ({
  progressCompleted,
  title,
  firstStepText,
  secondStepText,
  children,
  handleClickInformationToQuote,
}: Props) => {
  const {
    cardContetStyles,
    titleStyles,
    firstStepTextStyles,
    secondStepTextStyles,
  } = useCardStyles({ progressCompleted });
  return (
    <Card>
      <CardContent classes={{ root: cardContetStyles }}>
        <Grid container direction="row">
          <Grid item xs={6}>
            <Typography classes={{ root: titleStyles }}>{title}</Typography>
          </Grid>
          <Grid item xs>
            <Box
              display="flex"
              flexWrap="nowrap"
              justifyContent="flex-end"
              sx={{ cursor: 'pointer' }}
            >
              <DocumentIcon />
              <Typography ml={1} onClick={handleClickInformationToQuote}>
                Information to quote
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item sm md={8} mt={1}>
            <Box display="flex" flexWrap="nowrap" alignItems="center">
              {progressCompleted ? (
                <ProgressIconComplete />
              ) : (
                <ProgressIconIncomplete />
              )}
              <Box>
                <Typography
                  ml={2}
                  mt={0}
                  classes={{ root: firstStepTextStyles }}
                >
                  {firstStepText}
                </Typography>
                <Typography
                  ml={2}
                  mt={1}
                  classes={{ root: secondStepTextStyles }}
                >
                  {secondStepText}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm md={4}>
            <Box display="flex" justifyContent="flex-end">
              {children}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardWithSuscriptionProcess;

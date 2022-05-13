import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as Info } from '../../static/Danger_Circle.svg';
import { ReactComponent as Filter } from '../../static/Filter.svg';

const MmrEvolution = () => {
  const data = [
    {
      id: 'MMR',
      color: 'hsl(185, 70%, 50%)',
      data: [
        {
          x: 'Oct 21',
          y: 8500,
        },
        {
          x: 'Nov 21',
          y: 10400,
        },
        {
          x: 'Dec 21',
          y: 8500,
        },
        {
          x: 'Jan 21',
          y: 10400,
        },
      ],
    },
    {
      id: 'ARR',
      color: 'hsl(220, 70%, 50%)',
      data: [
        {
          x: 'Oct 21',
          y: 9000,
        },
        {
          x: 'Nov 21',
          y: 10000,
        },
        {
          x: 'Dec 21',
          y: 9000,
        },
        {
          x: 'Jan 21',
          y: 10000,
        },
      ],
    },
  ];

  return (
    <Grid padding={4} container spacing={2}>
      <Grid xs={6}>
        <Box>
          <Typography variant="h6" color="initial">
            MMR Evolution
          </Typography>
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton aria-label="info">
            <Info />
          </IconButton>
          <IconButton aria-label="info">
            <Filter />
          </IconButton>
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box>
          <Typography
            fontFamily="roboto"
            fontWeight={600}
            variant="h3"
            color="initial"
          >
            $900
          </Typography>
        </Box>
      </Grid>
      <Grid display="flex" alignItems="center" justifyContent="flex-end" xs={6}>
        <Box display="flex">
          <Typography
            display="flex"
            alignItems="center"
            variant="body1"
            color="initial"
          >
            <Box
              width={12}
              height={12}
              borderRadius={50}
              marginRight={1}
              bgcolor="#66c2a5"
            />
            MMR
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            variant="body1"
            color="initial"
            ml={2}
          >
            <Box
              width={12}
              height={12}
              borderRadius={50}
              marginRight={1}
              bgcolor="#fc8d62"
            />
            ARR
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <div style={{ width: '100%', height: 500 }}>
          <ResponsiveLine
            data={data}
            pointSize={10}
            colors={{ scheme: 'set2' }}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh
            lineWidth={10}
            enablePoints={false}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              stacked: false,
              min: 'auto',
              max: 'auto',
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            margin={{ top: 40, right: 10, bottom: 50, left: 60 }}
          />
          ;
        </div>
      </Grid>
    </Grid>
  );
};

export default MmrEvolution;

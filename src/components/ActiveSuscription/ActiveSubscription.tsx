import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ReactComponent as Chat } from '../../static/Chat.svg';
import { ReactComponent as Notification } from '../../static/Notification.svg';
import { ReactComponent as Danger } from '../../static/Danger-triangle.svg';
import { userActiveStyle } from './UseActiveStyles';

const ActiveSubscription = () => {
  const classes = userActiveStyle();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
  }));

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight={600} variant="subtitle1">
            Monthly Bookkeeping
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <Danger />
                  <Typography
                    fontWeight={500}
                    marginLeft={1}
                    variant="body1"
                    color="initial"
                  >
                    Pending Task
                  </Typography>
                  <div className={classes.ContetStyles}> 4 </div>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Notification />
                  <Typography
                    fontWeight={500}
                    marginLeft={1}
                    variant="body1"
                    color="initial"
                  >
                    Pending Task
                  </Typography>
                  <div className={classes.RoseContetStyles}> 1 </div>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Chat />
                  <Typography
                    fontWeight={500}
                    marginLeft={1}
                    variant="body1"
                    color="initial"
                  >
                    Unread messages
                  </Typography>
                  <div className={classes.RoseContetStyles}> 3 </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={600} variant="subtitle1">
            Softlanding
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography fontWeight={600} variant="subtitle1">
            Taxes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ActiveSubscription;

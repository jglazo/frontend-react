import React, { FunctionComponent } from 'react';
import {
  Grid,
  TextField,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactComponent as CallingIcon } from '../../../static/calling-icon.svg';
import googleLogo from '../../../static/google-48.png';

interface StepFourProps {
  formik: any;
  classes: Record<string, any>;
}

const StepFour: FunctionComponent<StepFourProps> = ({ formik, classes }) => {
  return (
    <Box width="100%">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              General Info
            </AccordionSummary>
            <AccordionDetails />
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Subscriptions
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h4>Company Incorporation in US</h4>
                  <Box className={classes.boxSubscriptions}>
                    <p>
                      Type of company: <span>LLC</span>
                    </p>
                    <p>
                      State: <span>Delaware</span>
                    </p>
                    <p>
                      Company Name: <span>Southern Minds</span>
                    </p>
                    <p>You do not need a business address</p>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <h4>Bookkeeping & Accounting</h4>
                  <Box className={classes.boxSubscriptions}>
                    <p>
                      Software: <span>QBO Online</span>
                    </p>
                    <p>
                      Raised money: <span>$500,000 - 1,000,000</span>
                    </p>
                    <p>
                      Total monthly expenses: <span>20k</span>
                    </p>
                    <p>
                      Payment Processor: <span>Stripe</span>
                    </p>
                  </Box>
                  <Box className={classes.callingSubscription}>
                    <CallingIcon />
                    <span>
                      A person will be contacting to define and approve the{' '}
                      budget.
                    </span>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} sm={10} md={9}>
              <label style={{ color: '#2D3748' }}>Password</label>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                value={formik.values.password}
                type="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                onChange={formik.handleChange}
                helperText={formik.touched.password && formik.errors.password}
              />
              <label style={{ color: '#2D3748', marginTop: '16px' }}>
                Repeat password
              </label>
              <TextField
                variant="outlined"
                fullWidth
                name="repeatPassword"
                type="password"
                value={formik.values.repeatPassword}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <Box className={classes.buttonSignUp}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Get into
                </Button>
                <div className="orDivider"> Or </div>
                <Button variant="contained" color="secondary" fullWidth>
                  <img src={googleLogo} alt="google-logo" width="15" />
                  <Box component="span" ml={1}>
                    Log In with Google
                  </Box>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepFour;

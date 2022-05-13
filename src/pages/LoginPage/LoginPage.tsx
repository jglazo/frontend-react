import React, { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// styles
import { loginPageStyles } from './LoginPage.styles';
import { rootStyles } from '../../theme/root.styles';
// sources
import logo from '../../static/full-logo.png';
import googleLogo from '../../static/google-48.png';

const LoginPage: FunctionComponent = () => {
  const classes = loginPageStyles();
  const rootClasses = rootStyles();
  const navigate = useNavigate();

  const signUp = () => navigate('/form');

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={7}>
        <div className={classes.sideLeft} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Grid container justifyContent="center" className={classes.sideRight}>
          <Grid item xs={8}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              height="100%"
              flexDirection="column"
              alignItems="start"
            >
              <img src={logo} alt="landous-logo" className="logo" />
              <div className="title">Log In</div>
              <div className="subtitle">
                We help startups to start up the future.
              </div>
              <Box className={classes.formInputRoot} mt={4}>
                <label>Email</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="email@domain"
                />
              </Box>
              <Box className={classes.formInputRoot} my={2}>
                <label>Password</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  placeholder="*******"
                />
              </Box>
              <Box className={classes.forgotLabel}>
                <p>Forgot password?</p>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <div>
                      I agree to all the
                      <span className={classes.link}>Terms</span>
                      and
                      <span className={classes.link}>Privacy policy</span>
                    </div>
                  }
                />
              </FormGroup>
              <Box className={rootClasses.flexColumn}>
                <Button variant="contained">Log In</Button>
                <Button variant="contained" color="secondary">
                  <img src={googleLogo} alt="google-logo" width="15" />
                  <Box component="span" ml={1}>
                    Log In with Google
                  </Box>
                </Button>
              </Box>
              <Box className={rootClasses.flexColumnCenterX} mt={1}>
                <p>
                  Don’t have an account ?
                  <Box
                    component="span"
                    className={classes.link}
                    onClick={signUp}
                  >
                    Sign In
                  </Box>
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

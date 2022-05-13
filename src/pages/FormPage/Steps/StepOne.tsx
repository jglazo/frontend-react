import React, { FunctionComponent } from 'react';
import { Grid, TextField, Box, Button, MenuItem } from '@mui/material';

interface StepOneProps {
  nextStep(value: number): void;
  updateValidators(root: number, inside: number): void;
  formik: any;
}

const StepOne: FunctionComponent<StepOneProps> = ({
  nextStep,
  formik,
  updateValidators,
}) => {
  const [current, setCurrent] = React.useState(0);
  const [about] = React.useState([{ id: 1, name: 'Partnership/Perk' }]);
  const [business] = React.useState([{ id: 1, name: 'B2B' }]);
  const [industries] = React.useState([{ id: 1, name: 'Startup Factory' }]);
  const [money] = React.useState([{ id: 1, name: '< $ 500,000' }]);

  const handleContinue = () => {
    const value = current + 1;
    if (value > 2) {
      nextStep(1);
    } else {
      setCurrent(value);
      updateValidators(0, value);
    }
  };

  return (
    <Box width="100%">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label>{`What's your full name?`}</label>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="First Name"
                name="firstName"
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Last Name"
                name="lastName"
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <label>{`What's your work email?`}</label>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="email@domain"
            name="email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onChange={formik.handleChange}
          />
        </Grid>
        {current >= 1 && (
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>{`What's your role in Southern Minds?`}</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Role"
                  name="role"
                  value={formik.values.role}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>How did you hear about us?</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  select
                  name="about"
                  value={formik.values.about}
                  error={formik.touched.about && Boolean(formik.errors.about)}
                  onChange={formik.handleChange}
                >
                  {about.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <label>Promotion Code</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="code"
                  name="code"
                  value={formik.values.code}
                  error={formik.touched.code && Boolean(formik.errors.code)}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
        {current >= 2 && (
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>{`Which is Southern Mind's business model?`}</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  select
                  name="business"
                  value={formik.values.business}
                  error={
                    formik.touched.business && Boolean(formik.errors.business)
                  }
                  onChange={formik.handleChange}
                >
                  {business.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <label>Which industry Southern Minds belongs to?</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  select
                  name="industry"
                  value={formik.values.industry}
                  error={
                    formik.touched.industry && Boolean(formik.errors.industry)
                  }
                  onChange={formik.handleChange}
                >
                  {industries.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <label>How much money has Southern Minds raised so far?</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  select
                  name="money"
                  value={formik.values.money}
                  error={formik.touched.money && Boolean(formik.errors.money)}
                  onChange={formik.handleChange}
                >
                  {money.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <label>Promotion Code</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder=""
                  name="done"
                  value={formik.values.done}
                  error={formik.touched.done && Boolean(formik.errors.done)}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Button
        onClick={handleContinue}
        variant="contained"
        fullWidth
        disabled={!(formik.isValid && formik.dirty)}
      >
        {current < 2 ? 'Send' : 'Next Step'}
      </Button>
    </Box>
  );
};

export default StepOne;

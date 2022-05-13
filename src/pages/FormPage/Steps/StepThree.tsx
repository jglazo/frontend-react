import React, { FunctionComponent } from 'react';
import { Grid, TextField, Box, Button, MenuItem } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CustomSwitch } from '../../../components/Switch/Switch';

interface StepThreeProps {
  nextStep(value: number): void;
  formik: any;
}

const StepThree: FunctionComponent<StepThreeProps> = ({ nextStep, formik }) => {
  const [options] = React.useState([{ id: 1, name: 'QBO Online' }]);
  const [optionsAmount] = React.useState([{ id: 1, name: '20K' }]);

  const handleContinue = () => {
    nextStep(3);
  };

  return (
    <Box width="100%">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label>Which software are you using for bookkeeping today?</label>
          <TextField
            variant="outlined"
            fullWidth
            select
            name="bookkeeping"
            value={formik.values.bookkeeping}
            error={
              formik.touched.bookkeeping && Boolean(formik.errors.bookkeeping)
            }
            onChange={formik.handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Is your accounting up to date?</label>
          <CustomSwitch
            name="accountingDate"
            sx={{ m: 1 }}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <label>From what date is it outdated?</label>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              value={formik.values.date}
              onChange={(newValue) => {
                formik.setFieldValue('date', newValue);
              }}
              renderInput={(params) => (
                <TextField
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  name="date"
                  fullWidth
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <label>What are your total monthly expenses?</label>
          <TextField
            name="expenses"
            value={formik.values.expenses}
            error={formik.touched.expenses && Boolean(formik.errors.expenses)}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
            select
          >
            {optionsAmount.map((optionAmount) => (
              <MenuItem key={optionAmount.id} value={optionAmount.id}>
                {optionAmount.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label>How many Bank accounters do you use?</label>
          <TextField
            name="bankAccounter"
            value={formik.values.bankAccounter}
            error={
              formik.touched.bankAccounter &&
              Boolean(formik.errors.bankAccounter)
            }
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <label>How many credit cards do you use?</label>
          <TextField
            name="creditCards"
            value={formik.values.creditCards}
            error={
              formik.touched.creditCards && Boolean(formik.errors.creditCards)
            }
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        disabled={!(formik.isValid && formik.dirty)}
        onClick={handleContinue}
        variant="contained"
        fullWidth
      >
        Next Step
      </Button>
    </Box>
  );
};

export default StepThree;

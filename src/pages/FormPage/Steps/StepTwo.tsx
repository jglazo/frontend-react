import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomSwitch } from '../../../components/Switch/Switch';
import { ReactComponent as ActivityIcon } from '../../../static/activity-icon.svg';

interface FormValues {
  accounting: boolean;
  taxes: boolean;
  payroll: boolean;
}
interface StepTwoProps {
  formik: {
    values: FormValues;
    handleChange: (e: React.ChangeEvent<any>) => void;
  };
  nextStep: (value: number) => void;
  classes: Record<string, any>;
}

const StepTwo: FunctionComponent<StepTwoProps> = ({
  nextStep,
  formik,
  classes,
}) => {
  const [currentStepValues, setCurrentStepValues] = useState({
    accounting: false,
    taxes: false,
    payroll: false,
  });

  useEffect(() => {
    const { accounting, taxes, payroll } = formik.values;

    setCurrentStepValues({
      accounting,
      taxes,
      payroll,
    });
  }, [formik.values]);

  const buttonIsDisabled = !Object.values(currentStepValues).some(
    (value) => value
  );

  const accordionContent = [
    {
      summary: 'Incorporate your business and other legal services',
      detailContent: (
        // Change when the ux definitions are ready
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      ),
    },
    {
      summary: 'Accounting, Tax & Payroll',
      detailContent: (
        <>
          <Grid container mb={1} spacing={2}>
            <CustomSwitch
              name="accounting"
              sx={{ m: 1 }}
              onChange={formik.handleChange}
            />
            <Typography classes={{ root: classes.switchText }} my="auto">
              Accounting
            </Typography>
          </Grid>
          <Grid container mb={1} spacing={2}>
            <CustomSwitch
              name="taxes"
              sx={{ m: 1 }}
              onChange={formik.handleChange}
            />
            <Typography classes={{ root: classes.switchText }} my="auto">
              Taxes
            </Typography>
          </Grid>
          <Grid container spacing={2} flexWrap="nowrap">
            <CustomSwitch
              name="payroll"
              sx={{ m: 1 }}
              onChange={formik.handleChange}
            />
            <Typography classes={{ root: classes.switchText }} my="auto">
              Payroll/Contractors managment
            </Typography>
          </Grid>
        </>
      ),
    },
    {
      summary: 'Finance',
      detailContent: (
        // Change when the ux definitions are ready
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      ),
    },
  ];

  return (
    <Box width="100%">
      <Box mb={3} p={2}>
        <Typography>
          Congratulations on raising your investment round. Now it’s time to
          grow, and the good news is that we can help you get ready for the next
          round. Wich of the following services would you like to acquire?
        </Typography>
        <Typography mt={2}>
          Wich of the following services would you like to acquire?
        </Typography>
      </Box>

      {accordionContent.map(({ summary, detailContent }) => (
        <Accordion
          key={summary}
          disabled={summary !== 'Accounting, Tax & Payroll'}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {summary}
          </AccordionSummary>
          <AccordionDetails>{detailContent}</AccordionDetails>
        </Accordion>
      ))}
      <Divider />
      <Grid container mt={2} ml={1} spacing={1}>
        <Grid item>
          <ActivityIcon />
        </Grid>
        <Grid item>
          <Typography classes={{ root: classes.title }}>
            Only Fundraising Dataroom
          </Typography>
        </Grid>
      </Grid>
      <Button
        onClick={() => nextStep(2)}
        variant="contained"
        fullWidth
        disabled={buttonIsDisabled}
      >
        Next Step
      </Button>
    </Box>
  );
};

export default StepTwo;

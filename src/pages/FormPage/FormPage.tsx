import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
// formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
// custom components
import Navbar from '../../components/NavBar';
import StepIcon from '../../components/StepIcon';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
// styles
import { formPageStyles } from './FormPage.styles';
// store
import { setCurrentStep } from '../../store/reducers/signUp';
// hooks
import { useAppDispatch } from '../../hooks/app';
import { useSignUp } from '../../hooks/signUp';

const FormPage = () => {
  const [validators, setValidators] = React.useState(
    Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      bookkeeping: Yup.string().required('Required'),
    })
  );

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      about: 1,
      code: '',
      business: 1,
      industry: 1,
      money: 1,
      done: '',
      accounting: false,
      accountingDate: false,
      taxes: false,
      payroll: false,
      bookkeeping: 1,
      date: null,
      expenses: 1,
      bankAccounter: '',
      creditCards: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: validators,
    onSubmit: (values) => {
      console.log(values); //eslint-disable-line
    },
  });

  const { validateForm } = formik;
  const dispatch = useAppDispatch();
  const signUpStep: any = useSignUp();
  const classes = formPageStyles();
  const steps = [
    { id: 1, name: 'General Info' },
    { id: 2, name: 'Subscriptions' },
    { id: 3, name: 'Specifications' },
    { id: 4, name: 'Summary' },
  ];

  const nextStep = (value: number) => {
    dispatch(setCurrentStep({ active: value }));
  };

  const updateSchema = (rootStep: number, insideStep: number) => {
    if (rootStep === 0) {
      if (insideStep === 1) {
        setValidators(
          validators.shape({
            role: Yup.string().required('Required'),
            about: Yup.number().required('Required'),
            code: Yup.string().required('Required'),
          })
        );
      }
      if (insideStep === 2) {
        setValidators(
          validators.shape({
            business: Yup.number().required('Required'),
            industry: Yup.number().required('Required'),
            money: Yup.number().required('Required'),
            done: Yup.string(),
          })
        );
      }
    }
  };

  React.useEffect(() => {
    validateForm();
  }, [validators]);

  React.useEffect(() => {
    if (signUpStep?.active === 2) {
      setValidators(
        validators.shape({
          accountingDate: Yup.boolean(),
          date: Yup.date().required(),
          expenses: Yup.string().required('Required'),
          bankAccounter: Yup.string().required('Required'),
          creditCards: Yup.string().required('Required'),
        })
      );
    }
    if (signUpStep?.active === 3) {
      setValidators(
        validators.shape({
          password: Yup.string()
            .required('Required')
            .min(8, 'Your must be at least 8 characters long'),
          repeatPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })
      );
    }
  }, [signUpStep]);

  React.useEffect(() => {
    if (Object.keys(signUpStep).length === 0) {
      dispatch(setCurrentStep({ active: 0 }));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={9} md={8} sx={{ marginBottom: '4em' }}>
          <Card>
            <CardContent className={classes.root}>
              <h1>Startup Subscriptions</h1>
              <p className="subtitle">
                We help startups to start up the future, by providing trust,{' '}
                peace of mind & investment readiness
              </p>
              <Box width="100%" my={2}>
                <Stepper activeStep={signUpStep.active || 0} alternativeLabel>
                  {steps.map((step: any) => (
                    <Step key={step.id}>
                      <StepLabel StepIconComponent={StepIcon}>
                        {step.name}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Grid container justifyContent="center">
                <Grid item xs={10} sm={9} md={8} lg={7}>
                  <form className={classes.form} onSubmit={formik.handleSubmit}>
                    {signUpStep.active === 0 && (
                      <StepOne
                        nextStep={nextStep}
                        formik={formik}
                        updateValidators={updateSchema}
                      />
                    )}
                    {signUpStep.active === 1 && (
                      <StepTwo
                        formik={formik}
                        nextStep={nextStep}
                        classes={classes}
                      />
                    )}
                    {signUpStep.active === 2 && (
                      <StepThree nextStep={nextStep} formik={formik} />
                    )}
                    {signUpStep.active === 3 && (
                      <StepFour formik={formik} classes={classes} />
                    )}
                  </form>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FormPage;

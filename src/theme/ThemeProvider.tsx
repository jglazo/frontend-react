import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ProviderProps {
  children: React.ReactNode | JSX.Element;
}

const Provider = ({ children }: ProviderProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#9B80FF',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#2D3748',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#2D3748',
        secondary: '#9B80FF',
      },
    },
    typography: {
      fontFamily: 'Raleway',
      body1: {
        fontSize: '14px',
      },
      button: {
        fontSize: '14px',
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            font-size: 14px;
          }
          @font-face {
            font-family: 'Raleway', 'Roboto;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            font-size: '14px';
          }
        `,
      },
      MuiCheckbox: {
        styleOverrides: {
          colorPrimary: {
            color: '#B9BBCC',
            '&$checked': {
              color: '#9B80FF',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '10px 40px',
            borderRadius: '30px',
            margin: '8px 0',
          },
          sizeSmall: {
            padding: '5px 25px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0px 16px 55px rgba(111, 108, 144, 0.08)',
            borderRadius: '20px',
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            '& .MuiStepLabel-labelContainer': {
              '& .MuiStepLabel-label.Mui-completed, & .MuiStepLabel-label.Mui-active': {
                fontWeight: 600,
                color: '#9B80FF',
              },
              '& .MuiStepLabel-label': {
                color: 'rgba(111, 108, 144, 1)',
              },
            },
          },
        },
      },
      MuiStepConnector: {
        styleOverrides: {
          root: {
            '&.Mui-active, &.Mui-completed': {
              '& .MuiStepConnector-line': {
                borderColor: '#9B80FF',
              },
            },
            '& .MuiStepConnector-line': {
              borderWidth: '6px',
              borderRadius: '5px',
              borderColor: 'rgba(239, 240, 246, 1)',
            },
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            width: '30px',
            height: '30px',
            color: 'rgba(239, 240, 246, 1)',
            '& .Mui-completed': { color: '#9B80FF' },
            '& .Mui-active': { color: '#9B80FF' },
          },
          text: {
            fill: 'rgba(111, 108, 144, 1)',
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            '&:first-of-type::before': {
              display: 'block',
            },
            '&.Mui-disabled ': {
              backgroundColor: 'white',
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            '&.Mui-expanded': {
              borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;

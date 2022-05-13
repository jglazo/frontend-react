import React, { FunctionComponent } from 'react';
import { StepIconProps, styled } from '@mui/material';

const StyledStepIcon = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: 'rgba(239, 240, 246, 1)',
  zIndex: 1,
  color: 'rgba(111, 108, 144, 1)',
  width: '30px',
  height: '30px',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  fontFamily: 'Roboto',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
  }),
}));

const StepIcon: FunctionComponent<StepIconProps> = ({
  icon,
  completed,
  active,
}) => {
  return (
    <StyledStepIcon ownerState={{ completed, active }}>
      <span>{icon}</span>
    </StyledStepIcon>
  );
};

export default StepIcon;

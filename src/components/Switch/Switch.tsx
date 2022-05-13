import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const CustomSwitch = styled(Switch)({
  padding: 6,
  '& .MuiSwitch-track': {
    backgroundColor: '#E5E5E5',
    borderRadius: 26 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 20,
      height: 20,
    },
  },
  '& .MuiSwitch-thumb': {
    width: 19,
    height: 19,
    margin: '0 1',
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'white',
  },
  '& .Mui-checked + .MuiSwitch-track': {
    opacity: '2 !important',
  },
});

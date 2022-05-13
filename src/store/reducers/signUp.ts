// signUp.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// definitions

interface SignUpAction {
  values?: any;
  active: number;
}

interface SignUpActionInside {
  values: any;
}

// Slice
const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {},
  reducers: {
    setCurrentStep(state, action: PayloadAction<SignUpAction>) {
      return { ...state, ...action.payload };
    },
    fillValuesForm(state, action: PayloadAction<SignUpActionInside>) {
      Object.assign(state, { values: action.payload.values });
    },
  },
});

// actions
export const { setCurrentStep, fillValuesForm } = signUpSlice.actions;

export default signUpSlice.reducer;

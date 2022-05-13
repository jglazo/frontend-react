import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// reducers
import signUp from './reducers/signUp';

// Root reducer (Combination multiples reducers)
const rootReducer = combineReducers({
  signUp,
});

// Store Enhancers
const enhancers: any = [];

// Middleware Configuration
const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => true,
});

const middleware: any = [loggerMiddleware];

// Store Instantiation
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  enhancers: (defaultEnhancers) => [...enhancers, ...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

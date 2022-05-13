import { useAppSelector } from './app';

export const useSignUp = () => {
  return useAppSelector((state) => state.signUp);
};

import { ChangeEvent, useState } from 'react';

export const useChangeInput = () => {
  const [state, setState] = useState('');

  const stateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  const resetState = () => {
    setState('');
  };

  return {
    state,
    stateChangeHandler,
    resetState,
  };
};
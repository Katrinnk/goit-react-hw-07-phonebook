import React from 'react';
import { useSelector } from 'react-redux';
import { selectorAppError } from 'Redux/appState/selectors';

const Error = () => {
  const error = useSelector(selectorAppError);

  return error && <h1>{error}</h1>;
};

export default Error;

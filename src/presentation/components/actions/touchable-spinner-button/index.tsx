import React, { useState } from 'react';

import { Container, Spinner, SpinnerValue, SpinnerActionText } from './styles';

interface TouchableInputSpinnerButtonProps {
  offset?: number; 
  limit?: number; 
}

export const TouchableInputSpinnerButton: React.FC<TouchableInputSpinnerButtonProps> = ({ offset = 0, limit }) => {

  const [number, setNumber] = useState(0)

  function handleOperationSpinner(type: "increment" | "decrement"){
    setNumber(prevNumber => type === "increment" ? prevNumber + 1 : prevNumber -1);
  }
  return (
    <Container >
    <Spinner onPress={() => handleOperationSpinner("decrement")} disabled={ number === offset } activeOpacity={ 0.7 } >
      <SpinnerActionText disabled={ number === 0 } >-</SpinnerActionText>
    </Spinner>

    <SpinnerValue>{number}</SpinnerValue>

    <Spinner onPress={() => handleOperationSpinner("increment")} disabled={ number === limit } activeOpacity={ 0.7 }>
      <SpinnerActionText>+</SpinnerActionText>
    </Spinner>
  </Container>
  );
}

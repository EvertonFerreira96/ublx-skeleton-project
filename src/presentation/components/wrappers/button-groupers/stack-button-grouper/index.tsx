import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface RequestOrderButtonGrouperProps extends TouchableOpacityProps {
  
}

export const StackButtonGrouper: React.FC<RequestOrderButtonGrouperProps> = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}
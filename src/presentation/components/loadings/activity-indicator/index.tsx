import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Container } from './styles';

export const PrimaryActivityIndicator: React.FC = () => {
  return (
      <Container>
          <ActivityIndicator size="small"/>
      </Container>
  )
}

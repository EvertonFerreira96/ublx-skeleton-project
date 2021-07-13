import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Platform } from 'react-native';

import { Feather } from '@expo/vector-icons';
interface HeaderBackComponentProps extends TouchableOpacityProps {

}

import { Container, Icon } from './styles';

export const HeaderBackComponent: React.FC<HeaderBackComponentProps> = ({ ...rest }) => {
  const icon = Platform.OS === "ios" ? "arrow-left" : "chevron-left";

  return (
  <Container>
    <TouchableOpacity {...rest} >
      <Feather name={icon} size={32} color="#333333" />
    </TouchableOpacity>
  </Container>);
}

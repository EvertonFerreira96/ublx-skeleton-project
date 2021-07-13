import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container,Content, Title, SubTitle, Icon } from './styles';

interface TouchableOpacityOptionProps extends TouchableOpacityProps{
    title: string;
    subTitle?: string;
}

export const TouchableOpacityOption: React.FC<TouchableOpacityOptionProps> = ({ activeOpacity, onPress, title, subTitle, children, ...rest }) => {
  return (
      <Container {...rest} onPress={onPress}>
          <Content>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Content>
          <Icon /> 
      </Container>
  )
}

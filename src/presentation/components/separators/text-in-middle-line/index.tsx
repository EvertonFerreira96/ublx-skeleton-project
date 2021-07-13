import React from 'react';
import { ViewProps, ColorValue, useColorScheme } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Content, Line, ContentText } from './styles';

interface TextInMiddleHorizontalLineProps extends ViewProps {
  text: String; 
  color?: ColorValue;
}


export const TextInMiddleHorizontalLine: React.FC <TextInMiddleHorizontalLineProps> = ({text, color, ...rest}: TextInMiddleHorizontalLineProps) => {
const theme = useTheme(); 
const OpacityColor= theme.colors.typography.shape.natural; 

  return (
    <Container {...rest}> 
      <Line style={{backgroundColor: color || OpacityColor}}/>
      <Content>
        <ContentText style={{color: color || OpacityColor}}>{text}</ContentText>
      </Content>
      <Line style={{backgroundColor: color || OpacityColor}}/>
    </Container>
  );
}

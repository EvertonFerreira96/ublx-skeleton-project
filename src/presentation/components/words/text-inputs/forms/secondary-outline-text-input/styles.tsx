import styled, { DefaultTheme } from 'styled-components/native';
import { TextInput, TextInputProps, Text, TextProps, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;

}

const Container = styled.View`   
  margin: ${RFValue(4)}px;
`;

const Label = styled(Text)`

  padding: 8px 0px;

  font-family: ${({ theme }) => theme.typography.small.dark.fontFamily}; 
  color: ${({ theme }) => theme.colors.typography.title.natural}; 
  font-size: ${({ theme }) => theme.typography.small.dark.fontSize}px; 
  line-height: ${({ theme }) => theme.typography.small.dark.lineHeight}px; 

`;

const PrimaryInput = styled(TextInput)`

flex:1;

color: ${({ theme }) => theme.colors.typography.contrast.light};

padding: ${RFValue(16)}px; 

border-color: ${({ theme }) => theme.colors.typography.shape.dark};
border-width:${RFValue(2)}px; 
border-radius:  ${RFValue(5)}px; 


font-family: ${({ theme }) => theme.typography.small.natural.fontFamily}; 
color: ${({ theme }) => theme.colors.typography.title.natural}; 
font-size: ${({ theme }) => theme.typography.small.natural.fontSize}px; 
line-height: ${({ theme }) => theme.typography.small.natural.lineHeight}px; 

`;

export {
  Container,
  PrimaryInput,
  Label
}

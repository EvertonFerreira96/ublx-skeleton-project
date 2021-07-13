
import { TextInput, DefaultTheme } from 'react-native-paper';
import React from 'react'; 
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { TextInputProps, Text, TextProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;

}

const PaperTextInputConatiner = styled.View`
width: 100%;

padding: 0 ${RFValue(4)}px ${RFValue(4)}px;

background-color: ${({ theme }) => theme.colors.background.primary };`;

const PaperTextLabel = styled(Text).attrs<TextProps>((props) => { })`
padding: ${RFValue(4)}px;
`;

export {
  PaperTextLabel,
  PaperTextInputConatiner
}

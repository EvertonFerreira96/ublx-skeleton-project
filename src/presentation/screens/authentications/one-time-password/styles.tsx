import styled from 'styled-components/native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface OneTimePasswordButtonTextInputProps extends TextInputProps{
  focused?: boolean
}

export const Container = styled.View`
  flex:1; 
  padding: ${getStatusBarHeight() + RFValue(16)}px ${RFValue(16)}px ${getBottomSpace()}px;
`;


export const Content = styled.View`
  flex:1; 

  align-items: center;
  justify-content: flex-start;

  margin: ${RFValue(52)}px 0 0;
`;

export const Header = styled.View `
  padding: ${RFValue(8)}px 0;
`;

export const Description = styled.Text`
  text-align: left;
  
  color: ${({ theme }) => theme.colors.typography.title.natural}; 
  line-height: ${({ theme }) => theme.typography.regular.natural.lineHeight}px; 
  font-size: ${({ theme }) => theme.typography.regular.natural.fontSize}px; 
  font-family: ${({ theme }) => theme.typography.regular.natural.fontFamily}; 

  width: 100%;
  `;

export const ButtonContainer = styled.View`
  width: 100%;
`;


export const OneTimePasswordComponent = styled.View`
  width: 100%;
  margin: ${RFValue(56)}px 0 ${RFValue(16)}px;
`;


export const OneTimePasswordContent = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: ${RFValue(4)}px;
`;

export const OneTimePasswordTextInput = 
  styled(TextInput)
    .attrs(({theme}) => ({
  maxLength: 1,
  keyboardType: "number-pad",
  selectTextOnFocus:true,
  selectionColor: theme.colors.primary.light
}))`
  
  text-align: center;
  
  color: ${({ theme }) => theme.colors.typography.title.natural}; 
  line-height: ${({ theme }) => theme.typography.medium.natural.lineHeight}px; 

  
  font-size: ${({ theme }) => theme.typography.medium.natural.fontSize}px; 
  font-family: ${({ theme }) => theme.typography.medium.natural.fontFamily}; 
`;

export const OneTimePasswordButtonTextInput = 
  styled(TouchableOpacity)
    .attrs<OneTimePasswordButtonTextInputProps>(
      ({theme}) => ({
  activeOpacity: 0.7,
}))`
  flex: 0.2;
  padding: ${({ theme }) => theme.typography.medium.natural.lineHeight}px; 

  justify-content: center;
  align-items: center;

  border-width: 1.5px; 
  border-color:  #C3C3C3;
`;


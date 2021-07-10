import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface DisabledProps {
    disabled?: boolean
}

export const Container = styled.View`

height: ${({ theme }) => theme.typography.regular.natural.lineHeight + RFValue(32)}px; 

align-items: center; 
flex-direction: row; 


margin: ${RFValue(4)}px;

background-color: ${({ theme }) => theme.colors.background.primary }; 

border-color: ${({ theme }) => theme.colors.typography.shape.dark };

border-width:${RFValue(2)}px; 
border-radius:  ${RFValue(5)}px; 

`;


export const Spinner = styled(TouchableOpacity)`
padding: 0 ${RFValue(16)}px;
`;


export const SpinnerValue = styled.Text`
    text-align: center;
    
    font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily}; 
    color: ${({ theme }) => theme.colors.typography.title.natural }; 
    font-size: ${({ theme }) => theme.typography.regular.dark.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.regular.dark.lineHeight}px; 
`;


export const SpinnerActionText= styled.Text<DisabledProps>`
    padding: 0 ${RFValue(4)}px;

    text-align: center;
    
    font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily}; 
    color: ${({ theme, disabled }) => disabled ? theme.colors.typography.shape.dark : theme.colors.typography.title.natural }; 
    font-size: ${({ theme }) => theme.typography.regular.dark.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.regular.dark.lineHeight}px; 
`;
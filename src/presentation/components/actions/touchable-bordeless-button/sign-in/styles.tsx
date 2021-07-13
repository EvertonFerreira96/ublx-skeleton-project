import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ModeProps {
    mode: "light" | "dark";
}

export const Button = styled(TouchableOpacity)<ModeProps>`

    align-items: center; 
    flex-direction: row; 

    opacity: ${({disabled}) => disabled ? 0.6 : 1};
 
    margin: ${RFValue(4)}px;
    padding: ${RFValue(16)}px; 

    background-color: ${({ theme, mode }) => mode === "light" ? theme.colors.background.primary : theme.colors.background.contrast }; 
    
    border-color: ${({ theme, mode }) => mode === "light" ? theme.colors.typography.shape.dark : theme.colors.background.contrast };
    border-width:${RFValue(2)}px; 
    border-radius:  ${RFValue(5)}px; 

`;

export const ImageContainer = styled.View<ModeProps>`

    justify-content: center;
    align-items: center; 


`; 

export const Title = styled.Text<ModeProps>`

    flex:1;

    text-align: center;
    
    font-family: ${({ theme }) => theme.typography.small.natural.fontFamily}; 
    color: ${({ theme, mode }) => mode === "light" ? theme.colors.typography.title.natural : theme.colors.typography.title.contrast }; 
    font-size: ${({ theme }) => theme.typography.small.natural.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.small.natural.lineHeight}px; 

`; 
import styled from 'styled-components/native';

import { ColorValue, TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {

    border?: string; 
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    
    opacity: ${({disabled}) => disabled ? 0.6 : 1};

    align-items: center; 
    justify-content: center;

    margin: ${RFValue(4)}px;
    padding: ${RFValue(16)}px;

    background-color: ${({ theme }) => theme.colors.background.primary}; 
    
    border-color: ${({ theme, border }) => border || theme.colors.typography.shape.dark}; 
    border-width:${RFValue(2)}px; 
    border-radius:  ${RFValue(5)}px; 
`;

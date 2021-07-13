import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    
    align-items: center; 

    opacity: ${({disabled}) => disabled ? 0.6 : 1};

    margin: ${RFValue(4)}px;
    padding: ${RFValue(16)}px;

    background-color: ${({ theme }) => theme.colors.background.primary}; 
    
    border-color: ${({ theme }) => theme.colors.typography.shape.dark};
    border-width:${RFValue(2)}px; 
    border-radius:  ${RFValue(5)}px; 
`;

export const Title = styled.Text`

    flex:1;

    text-align: center;
    
    font-family: ${({ theme }) => theme.typography.small.natural.fontFamily}; 
    color: ${({ theme }) => theme.colors.typography.title.natural}; 
    font-size: ${({ theme }) => theme.typography.small.natural.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.small.natural.lineHeight}px; 
`; 
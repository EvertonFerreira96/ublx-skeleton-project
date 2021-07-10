import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    flex:1;
    
    height: ${({ theme }) => theme.typography.regular.natural.lineHeight + RFValue(32)}px; 
    max-height: ${({ theme }) => theme.typography.regular.natural.lineHeight + RFValue(32)}px; 
    
    opacity: ${({disabled}) => disabled ? 0.6 : 1};

    align-items: center; 
    flex-direction: row; 

    margin: ${RFValue(4)}px;

    background-color: ${({ theme }) => theme.colors.primary.natural}; 
    
    border-color: ${({ theme }) => theme.colors.primary.natural};
    border-width:${RFValue(2)}px; 
    border-radius:  ${RFValue(5)}px; 
`;

export const Title = styled.Text`
    flex:1;

    text-align: center;
    
    font-family: ${({ theme }) => theme.typography.small.natural.fontFamily}; 
    color: ${({ theme }) => theme.colors.typography.title.contrast}; 
    font-size: ${({ theme }) => theme.typography.small.natural.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.small.natural.lineHeight}px; 
`; 
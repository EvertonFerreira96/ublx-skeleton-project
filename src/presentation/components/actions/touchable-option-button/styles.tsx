import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import {Entypo} from '@expo/vector-icons'; 

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity:0.6
})`
    width: 100%;
    
    opacity: ${({disabled}) => disabled ? 0.6 : 1};

    align-items: center; 
    justify-content: space-between;
    padding: ${RFValue(16)}px;
    flex-direction: row; 

    background-color: ${({ theme }) => theme.colors.background.primary}; 
`;

export const Content = styled.View`

    align-items: flex-start; 
    flex-direction: column; 

    padding: ${RFValue(16)}px ${RFValue(24)}px;

`; 

export const Title = styled.Text`
    text-align: left;

    font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily}; 
    color: ${({ theme }) => theme.colors.primary.dark}; 
    font-size: ${({ theme }) => theme.typography.regular.dark.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.regular.dark.lineHeight}px; 
`; 


export const SubTitle = styled.Text`
    text-align: left;

    font-family: ${({ theme }) => theme.typography.small.light.fontFamily}; 
    color: ${({ theme }) => theme.colors.typography.contrast.natural}; 
    font-size: ${({ theme }) => theme.typography.small.light.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.small.light.lineHeight}px; 
`; 


export const Icon = styled(Entypo).attrs( ({theme}) => ({
    name: 'chevron-right',
    size: theme.typography.small.light.lineHeight,
    color: theme.colors.typography.contrast.light 
}))``



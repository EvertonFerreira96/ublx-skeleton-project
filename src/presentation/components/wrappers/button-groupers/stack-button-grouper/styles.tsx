import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: ${({theme}) => theme.colors.background.primary};

   justify-content: center;
   align-items: center;

   padding: 0 ${RFValue(12)}px
`;

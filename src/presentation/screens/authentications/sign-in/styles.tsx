import styled from 'styled-components/native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex:1; 
  padding: ${getStatusBarHeight()}px ${RFValue(8)}px ${getBottomSpace()}px;
`;

export const SignInContainer = styled.View`

  flex:1; 
  width: 100%;

`;

export const Header = styled.View`
  align-items: flex-start;
  
  width: 100%;

  padding: ${RFValue(16)}px ${RFValue(4)}px;
  
`; 

export const LogoContainer = styled.View`
  flex:1; 

  width: 100%;

  align-items: center;
  justify-content: center;

`;


export const SignInContent = styled.View`
  width: 100%;
  `;


export const SignInProviderContent = styled.View`
`;

export const ProviderOptionContainer = styled.View`
padding: ${RFValue(32)}px 0;
`;
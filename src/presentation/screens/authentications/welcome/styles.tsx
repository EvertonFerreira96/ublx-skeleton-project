import { Image, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1; 
`;

export const BannerContainer = styled(ImageBackground)`
flex:1;


align-items: center;
justify-content: flex-end;

padding: ${getStatusBarHeight()}px 0 0;
`;

export const BannerMessageContent = styled.View`

flex: 1;

width: 100%;

align-items: flex-start;
justify-content: space-between; 
padding: ${RFValue(getStatusBarHeight())}px ${RFValue(12)}px ${RFValue(32)}px;

`;

export const Logo = styled(Image).attrs(() => {
  return ({
    resizeMode: "contain"
  })
})`
  height: ${RFValue(26)}px;
  width: ${RFValue(26)}px;
`;
export const Title = styled.Text`

    font-family: ${({ theme }) => theme.typography.extraLarge.dark.fontFamily}; 
    color: ${({ theme }) => theme.colors.typography.title.contrast}; 
    font-size: ${({ theme }) => theme.typography.extraLarge.dark.fontSize}px; 
    line-height: ${({ theme }) => theme.typography.extraLarge.dark.lineHeight}px; 
 `;

export const SubTitle = styled.Text`    
font-family: ${({ theme }) => theme.typography.small.light.fontFamily}; 
color: ${({ theme }) => theme.colors.typography.title.contrast}; 
font-size: ${({ theme }) => theme.typography.small.light.fontSize}px; 
line-height: ${({ theme }) => theme.typography.small.light.lineHeight}px; `;

export const BannerActionsContent = styled.View`
  width: 100%;
  padding: 0 0 ${getBottomSpace()}px;
    background-color: ${({ theme }) => theme.colors.background.primary}; 

`;
import styled from 'styled-components/native';
import { View, ViewProps, Text, TextProps, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Container = styled(View).attrs<ViewProps>((props) => {
})`
  flex-direction: row;

  align-items: center;

  width: 100%;
  padding: ${RFValue(4)}px;

`; 


const Line = styled(View).attrs<ViewProps>((props) => {
  
})`
  flex: 1;
  height: 1.5px;
  background-color: #4F4F4F;
  justify-content: center;
`;



const Content = styled(View).attrs<ViewProps>((props) => {
  
})`
  min-height: 25px;
  padding: 0px 8px; 
`;

const ContentText = styled(Text).attrs<TextProps>((props) => {

})`
  font-size: ${Platform.OS === "ios" ? 20 : 18}px;
  color: #4F4F4F; 
`;

export {
  Container,
  Content,
  ContentText, 
  Line
}
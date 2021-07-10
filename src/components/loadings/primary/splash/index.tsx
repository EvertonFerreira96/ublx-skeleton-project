import React from 'react';

import Lottie from 'lottie-react-native'; 

import LoadingSplashAnimated from '@/assets/animations/primary-loading-splash.json'; 

import { Container } from './styles';

interface LoadingSplashAnimatedPrimaryComponentProps {
    height?: number; 
    mode?: "light" | "dark";
}

export const LoadingSplashAnimatedPrimaryComponent: React.FC<LoadingSplashAnimatedPrimaryComponentProps> = ({ height = 200, mode = "light" }) => {
  return (
  <Container>
      <Lottie source={ LoadingSplashAnimated } loop autoPlay duration={750} resizeMode="contain" style={{ height: height }}  /> 
  </Container>
);
}

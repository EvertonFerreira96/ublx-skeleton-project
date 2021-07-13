import React from 'react';

import Lottie from 'lottie-react-native'; 

import DarkLoadingAnimated from '@/assets/animations/primary-loading-dark.json'; 
import LightLoadingAnimated from '@/assets/animations/primary-loading-light.json'; 

import { Container } from './styles';

interface LoadingRemoteAnimatedPrimaryComponentProps {
    height?: number; 
    mode?: "light" | "dark";
}

export const LoadingRemoteAnimatedPrimaryComponent: React.FC<LoadingRemoteAnimatedPrimaryComponentProps> = ({ height = 42, mode = "light" }) => {
  return (
  <Container>
      <Lottie source={ mode === "light" ? LightLoadingAnimated : DarkLoadingAnimated } loop autoPlay duration={750} resizeMode="contain"  style={{height}}  /> 
  </Container>
);
}

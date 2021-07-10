import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {
  useFonts
} from 'expo-font';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { themes } from '@/styles/themes';

import { Buttons } from '@/meeting/buttons';
import { LoadingSplashAnimatedPrimaryComponent } from './components/loadings/primary/splash';
import { TextInputs } from './meeting/text-inputs';

export default function App() {
  
  const theme = themes["light"];

  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });


  useEffect(() => {
    let isMounted = true; 

   
    if(isMounted && fontsLoaded){ 
      setTimeout( () => {
        setLoading(false); 
      }, 3000)
    }
    return () => { isMounted = false; } 
  },[fontsLoaded])

  return (
    loading 
     ?
        <LoadingSplashAnimatedPrimaryComponent />

     :
      <ThemeProvider theme={theme}>
        <PaperProvider theme={PaperDefaultTheme}>
          <TextInputs />
        </PaperProvider>
      </ThemeProvider>
  )
}

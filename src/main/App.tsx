import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useEffect, useState } from 'react';

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

import { LoadingSplashAnimatedPrimaryComponent } from '../presentation/components/loadings/primary/splash';

import Routes from './routes/index.routes';
import { ApplicationContextProviderManagement } from '@/presentation/hooks';

export default function App() {
  
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
      <ApplicationContextProviderManagement>
        <Routes /> 
      </ApplicationContextProviderManagement>
  )
}

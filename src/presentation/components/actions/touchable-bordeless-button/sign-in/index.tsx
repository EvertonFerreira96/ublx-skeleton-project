
import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { useTheme } from 'styled-components';

import AppleIcon from '@/assets/images/simple-sign-on/apple.svg'; 
import GoogleIcon from '@/assets/images/simple-sign-on/google.svg'; 
import MailIcon from '@/assets/images/mail.svg'; 
import PhoneIcon from '@/assets/images/phone.svg'; 

import { LoadingRemoteAnimatedPrimaryComponent } from '@/presentation/components/loadings/primary/remote';

import { Button, ImageContainer, Title } from './styles';

interface SignInSocialButton extends TouchableOpacityProps{
    title: string; 
    type: "Apple" | "Google" | "Mail" | "Phone";
    mode?: "light" | "dark";
    loading?: boolean;
}

export const SignInProviderButton: React.FC<SignInSocialButton> = (
    { 
        title
      , type
      , onPress
      , mode = "light"
      , loading = false
      , ...rest 
    }) => 
  {
  const theme = useTheme();
  return (
    <Button activeOpacity={0.7} mode={mode} onPress={onPress} {...rest}>
        <ImageContainer  mode={mode} >
           { type === "Apple"
             && <AppleIcon 
                          height={ 32 }
                          width={ 32 }
                          fill={ mode === "light" 
                                 ? theme.colors.typography.contrast.natural 
                                 : theme.colors.typography.title.contrast} /> 
          }
          { type === "Google"
            &&  <GoogleIcon 
                           height={ 32 }
                           width={ 32 }  /> 
          }
          { type === "Mail"
            &&  <MailIcon 
                           height={ 32 }
                           width={ 32 } 
                           fill={ mode === "light" 
                                 ? theme.colors.typography.contrast.natural 
                                 : theme.colors.typography.title.contrast} /> 
          }
          { type === "Phone"
            &&  <PhoneIcon 
                           height={ 32 }
                           width={ 32 } 
                           fill={ mode === "light" 
                                 ? theme.colors.typography.contrast.natural 
                                 : theme.colors.typography.title.contrast} /> 
          }
        </ImageContainer>
        { loading 
            ? 
              <LoadingRemoteAnimatedPrimaryComponent /> 
            : <Title mode={mode}>
                {title}
              </Title>
        }
    </Button>
  )
}

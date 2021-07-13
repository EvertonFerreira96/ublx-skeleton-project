import React, { useRef, useState } from 'react';

import UbelixImage from '@/assets/images/logo/logo.svg';

import { Container, Header, SignInContainer, SignInContent, LogoContainer, SignInProviderContent, ProviderOptionContainer } from './styles';
import { SignInProviderButton } from '@/presentation/components/actions/touchable-bordeless-button/sign-in';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { HeaderBackComponent } from '@/presentation/components/headers/back';
import { TextInMiddleHorizontalLine } from '@/presentation/components/separators';
import { PrimaryTouchableBordelessFilledButton } from '@/presentation/components/actions/touchable-bordeless-button/primary/fillled-button';
import { useTheme } from 'styled-components/native';
import { SecondaryOutlineTextInput } from '@/presentation/components/words/text-inputs/forms/secondary-outline-text-input';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation } from '@react-navigation/native';

import { IOneTimePasswordNavigationParamsProps } from '@presentation/screens/authentications/one-time-password';

export const SignIn: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [ signInByPhone, setSignInByPhone ] = useState(true);
  const formRef = useRef<FormHandles>(null);

  function  handleSignIn(){
    navigate("OneTimePassword", {
      oneTimePassword: {
        account: 'aaasdadadasda', 
        sendBy: signInByPhone ? 'phone' : 'mail'
      }
    } as IOneTimePasswordNavigationParamsProps
    )
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled contentContainerStyle={{height: '100%'}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <Container>

        <Header>
          <HeaderBackComponent />
        </Header>
        <SignInContainer>
          <LogoContainer>
            <UbelixImage height={48} width={"100%"} />
          </LogoContainer>
          <SignInContent>
            <Form ref={formRef} onSubmit={() => { }}>

              <SecondaryOutlineTextInput 
                label={ signInByPhone ? "Celular" : "E-mail"} 
                name="account" 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={ signInByPhone ? "number-pad" : "email-address"} 
                placeholder={ signInByPhone ? "(99) 9 9999 - 9999" : "Digite seu e-mail"}  />
              <PrimaryTouchableBordelessFilledButton title="Continuar" onPress={() => handleSignIn()} />
            </Form>
          </SignInContent>

        </SignInContainer>
        <SignInProviderContent>
          <ProviderOptionContainer>
            <TextInMiddleHorizontalLine text="ou" color={theme.colors.typography.contrast.dark} />
          </ProviderOptionContainer>


          {
            Platform.OS == "ios"
            ? <SignInProviderButton type="Apple" mode="dark" title="Continuar com a Apple" />
            : <SignInProviderButton type="Google" title="Entrar com o Google" />
          }

          {
            true 
            ? <SignInProviderButton type="Mail" title="Entrar com o E-mail" onPress={() => setSignInByPhone(false)} />
            : <SignInProviderButton type="Phone" title="Entrar com o Celular" onPress={() => setSignInByPhone(true)} />
          }
        </SignInProviderContent>

      </Container>
          </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
